function initPricingTabs() {
  const firstBillingBtn =
    document.querySelector<HTMLButtonElement>("[data-billing]");
  if (!firstBillingBtn) return;
  if ((firstBillingBtn as any)._pricingInit) return;
  (firstBillingBtn as any)._pricingInit = true;

  let currentBilling: "monthly" | "yearly" = "monthly";
  const selected = new Map<
    string,
    { title: string; monthly: string; yearly: string; category: string }
  >();

  const discountPct =
    parseInt(
      document.querySelector<HTMLElement>("[data-yearly-discount]")?.dataset
        .yearlyDiscount ?? "0",
      10,
    ) / 100;

  const billingButtons =
    document.querySelectorAll<HTMLButtonElement>("[data-billing]");
  const priceDisplays =
    document.querySelectorAll<HTMLElement>(".price-display");
  const periodDisplays =
    document.querySelectorAll<HTMLElement>(".period-display");

  billingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentBilling = btn.dataset.billing as "monthly" | "yearly";

      billingButtons.forEach((b) => {
        const isActive = b.dataset.billing === currentBilling;
        b.classList.toggle("bg-white", isActive);
        b.classList.toggle("shadow", isActive);
        b.classList.toggle("bg-transparent", !isActive);
        b.style.zIndex = isActive ? "1" : "0";
      });

      priceDisplays.forEach((display) => {
        display.textContent =
          currentBilling === "monthly"
            ? (display.dataset.monthly ?? "")
            : (display.dataset.yearly ?? "");
      });

      periodDisplays.forEach((display) => {
        display.textContent = currentBilling === "monthly" ? "/month" : "/year";
      });

      updateSummary();
    });
  });

  function updateSummary() {
    const summaryDiv = document.getElementById("pricing-summary");
    const listEl = document.getElementById("selected-plans-list");
    const totalMonthlyEl = document.getElementById("pricing-total-monthly");
    const totalYearlyEl = document.getElementById("pricing-total-yearly");
    const totalYearlyOriginalEl = document.getElementById(
      "pricing-total-yearly-original",
    );
    if (!summaryDiv || !listEl || !totalMonthlyEl || !totalYearlyEl) return;

    let monthlyTotal = 0;
    let yearlyTotal = 0;
    let yearlyOriginalTotal = 0;

    const categoryOrder = ["Modules", "Add-ons"];
    const groups = new Map<
      string,
      { title: string; monthly: string; yearly: string; category: string }[]
    >();
    for (const item of selected.values()) {
      if (!groups.has(item.category)) groups.set(item.category, []);
      groups.get(item.category)!.push(item);
    }

    const emptyLabel: Record<string, string> = {
      Modules: "No modules selected",
      "Add-ons": "No add-ons selected",
    };

    const html = categoryOrder
      .map((category) => {
        const items = groups.get(category) ?? [];
        const itemRows = items
          .map((item) => {
            const priceStr =
              currentBilling === "monthly" ? item.monthly : item.yearly;

            const monthlyNum = parseInt(item.monthly.replace(/[$,]/g, ""), 10);
            if (!isNaN(monthlyNum)) monthlyTotal += monthlyNum;

            const yearlyNum = parseInt(item.yearly.replace(/[$,]/g, ""), 10);
            const effectiveYearly = !isNaN(yearlyNum)
              ? yearlyNum
              : !isNaN(monthlyNum)
                ? monthlyNum * 12
                : NaN;
            if (!isNaN(effectiveYearly)) {
              yearlyOriginalTotal += effectiveYearly;
              yearlyTotal += Math.round(effectiveYearly * (1 - discountPct));
            }

            return `<li class="flex justify-between items-center py-2 ">
              <span class="font-outfit font-normal text-base text-subtitle">${item.title}</span>
              <span class="font-outfit font-normal text-lg text-title-section">${priceStr !== "n/a" ? priceStr : "n/a"}</span>
            </li>`;
          })
          .join("");
        const icon =
          category === "Modules"
            ? "/assets/pricing/pricing_modules_box.png"
            : "/assets/pricing/pricing_addons_box.png";
        const content =
          items.length > 0
            ? `<ul class="divide-y divide-dashed divide-dashed-border">${itemRows}</ul>`
            : `<div class="flex font-outfit font-normal text-base my-2 text-left text-subtitle italic">${emptyLabel[category]}</div>`;
        return `<li class="pt-8 first:pt-0">
          <div class="flex items-center gap-3 mb-2">
            <img src="${icon}" alt="" />
            <span class="font-outfit font-normal text-base text-title-section">${category}</span>
          </div>
          ${content}
        </li>`;
      })
      .join("");

    listEl.innerHTML = html;
    totalMonthlyEl.textContent = `$${monthlyTotal.toLocaleString()}`;
    totalYearlyEl.textContent = `$${yearlyTotal.toLocaleString()}`;

    if (totalYearlyOriginalEl) {
      const showOriginal =
        discountPct > 0 && yearlyOriginalTotal !== yearlyTotal;
      totalYearlyOriginalEl.textContent = `$${yearlyOriginalTotal.toLocaleString()}`;
      totalYearlyOriginalEl.classList.toggle("hidden", !showOriginal);
    }
  }

  function selectCard(
    card: Element,
    title: string,
    monthly: string,
    yearly: string,
  ) {
    const sectionEl = card.closest<HTMLElement>("[data-section]");
    const section = sectionEl?.dataset.section ?? "";
    const category = section === "addons" ? "Add-ons" : "Modules";
    selected.set(title, { title, monthly, yearly, category });
    card.classList.add("card-selected");
    card.querySelector(".indicator-btn")?.classList.add("hidden");
    const checkboxEl = card.querySelector<HTMLElement>(".indicator-checkbox");
    if (checkboxEl) {
      checkboxEl.querySelector<HTMLInputElement>("input")!.checked = true;
      checkboxEl.classList.remove("hidden");
    }
  }

  function deselectCard(card: Element, title: string) {
    selected.delete(title);
    card.classList.remove("card-selected");
    card.querySelector(".indicator-btn")?.classList.remove("hidden");
    const checkboxEl = card.querySelector<HTMLElement>(".indicator-checkbox");
    if (checkboxEl) {
      checkboxEl.querySelector<HTMLInputElement>("input")!.checked = false;
      checkboxEl.classList.add("hidden");
    }
  }

  document
    .querySelectorAll<HTMLButtonElement>(".indicator-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".pricing-card")!;
        const title = btn.dataset.title!;
        selectCard(card, title, btn.dataset.monthly!, btn.dataset.yearly!);
        updateSummary();
      });
    });

  document
    .querySelectorAll<HTMLElement>(".indicator-checkbox")
    .forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const card = checkbox.closest(".pricing-card")!;
        const title = checkbox.dataset.title!;
        if ((e.target as HTMLInputElement).checked) {
          selectCard(
            card,
            title,
            checkbox.dataset.monthly!,
            checkbox.dataset.yearly!,
          );
        } else {
          deselectCard(card, title);
        }
        updateSummary();
      });
    });

  function openCard(btn: HTMLButtonElement) {
    const card = btn.closest(".pricing-card")!;
    card.querySelector(".chevron-down")?.classList.add("hidden");
    card.querySelector(".chevron-up")?.classList.remove("hidden");
    document.getElementById(btn.dataset.target!)?.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeCard(btn: HTMLButtonElement) {
    const card = btn.closest(".pricing-card")!;
    card.querySelector(".chevron-up")?.classList.add("hidden");
    card.querySelector(".chevron-down")?.classList.remove("hidden");
    document.getElementById(btn.dataset.target!)?.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }

  document
    .querySelectorAll<HTMLButtonElement>(".accordion-toggle")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const sectionWrapper = btn.closest("[data-section]");
        if (!sectionWrapper) return;

        const isOpen = btn.getAttribute("aria-expanded") === "true";

        sectionWrapper
          .querySelectorAll<HTMLButtonElement>(".accordion-toggle")
          .forEach((sibling) => {
            if (
              sibling !== btn &&
              sibling.getAttribute("aria-expanded") === "true"
            ) {
              closeCard(sibling);
            }
          });

        if (isOpen) {
          closeCard(btn);
        } else {
          openCard(btn);
        }
      });
    });

  updateSummary();
}

document.addEventListener("DOMContentLoaded", initPricingTabs);
document.addEventListener("astro:page-load", initPricingTabs);
