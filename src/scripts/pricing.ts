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
    const totalEl = document.getElementById("pricing-total");
    const totalOriginalEl = document.getElementById("pricing-total-original");
    const periodEl = document.getElementById("pricing-total-period");
    if (!summaryDiv || !listEl || !totalEl || !periodEl) return;

    let total = 0;
    let originalTotal = 0;
    const suffix = currentBilling === "monthly" ? "/mo" : "/yr";

    const categoryOrder = ["Modules", "Add-ons"];
    const groups = new Map<
      string,
      { title: string; monthly: string; yearly: string; category: string }[]
    >();
    for (const item of selected.values()) {
      if (!groups.has(item.category)) groups.set(item.category, []);
      groups.get(item.category)!.push(item);
    }

    const html = categoryOrder
      .filter((cat) => groups.has(cat))
      .map((category) => {
        const items = groups.get(category)!;
        const itemRows = items
          .map((item) => {
            const priceStr =
              currentBilling === "monthly" ? item.monthly : item.yearly;
            const num = parseInt(priceStr.replace(/[$,]/g, ""), 10);
            if (!isNaN(num)) {
              originalTotal += num;
              total += Math.round(num * (1 - discountPct));
            }
            return `<li class="flex justify-between items-center py-2 text-gray-700">
              <span class="font-outfit font-normal text-base text-subtitle">${item.title}</span>
              <span class="font-outfit font-normal text-lg text-title-section">${priceStr !== "n/a" ? priceStr : "n/a"}<span class="text-subtitle font-normal text-sm"> ${suffix}</span></span>
            </li>`;
          })
          .join("");
        const icon =
          category === "Modules"
            ? "/assets/pricing/pricing_modules_box.png"
            : "/assets/pricing/pricing_addons_box.png";
        return `<li class="pt-8 first:pt-0">
          <div class="flex items-center gap-3 mb-2">
            <img src="${icon}" alt="" />
            <span class="font-outfit font-normal text-base text-title-section">${category}</span>
          </div>
          <ul class="divide-y divide-dashed divide-dashed-border">${itemRows}</ul>
        </li>`;
      })
      .join("");

    listEl.innerHTML = html;
    totalEl.textContent = `$${total.toLocaleString()}`;
    periodEl.textContent = currentBilling === "monthly" ? "/month" : "/year";

    if (totalOriginalEl) {
      const showOriginal =
        currentBilling === "yearly" &&
        discountPct > 0 &&
        originalTotal !== total;
      totalOriginalEl.textContent = `$${originalTotal.toLocaleString()}`;
      totalOriginalEl.classList.toggle("hidden", !showOriginal);
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
    card.querySelector(".icon-plus")?.classList.add("hidden");
    card.querySelector(".icon-check")?.classList.remove("hidden");
    const checkbox = card.querySelector<HTMLInputElement>(
      ".indicator-checkbox",
    );
    if (checkbox) checkbox.checked = true;
  }

  function deselectCard(card: Element, title: string) {
    selected.delete(title);
    card.classList.remove("card-selected");
    card.querySelector(".icon-check")?.classList.add("hidden");
    card.querySelector(".icon-plus")?.classList.remove("hidden");
    const checkbox = card.querySelector<HTMLInputElement>(
      ".indicator-checkbox",
    );
    if (checkbox) checkbox.checked = false;
  }

  document
    .querySelectorAll<HTMLButtonElement>(".indicator-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".pricing-card")!;
        const title = btn.dataset.title!;
        if (selected.has(title)) {
          deselectCard(card, title);
        } else {
          selectCard(card, title, btn.dataset.monthly!, btn.dataset.yearly!);
        }
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

    card.querySelector(".indicator-btn")?.classList.add("hidden");
    const checkbox = card.querySelector<HTMLElement>(".indicator-checkbox");
    if (checkbox) {
      const nestedInput = checkbox.querySelector<HTMLInputElement>("input");
      if (nestedInput)
        nestedInput.checked = selected.has(checkbox.dataset.title!);
      checkbox.classList.remove("hidden");
    }
    card.querySelector(".chevron-down")?.classList.add("hidden");
    card.querySelector(".chevron-up")?.classList.remove("hidden");

    document.getElementById(btn.dataset.target!)?.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeCard(btn: HTMLButtonElement) {
    const card = btn.closest(".pricing-card")!;

    card.querySelector(".indicator-btn")?.classList.remove("hidden");
    card.querySelector(".indicator-checkbox")?.classList.add("hidden");

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
}

document.addEventListener("DOMContentLoaded", initPricingTabs);
document.addEventListener("astro:page-load", initPricingTabs);
