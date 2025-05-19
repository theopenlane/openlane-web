import { useEffect, useState } from "react";
import { CircleCheckBig } from "lucide-react";

const tabs = [
  "Cookie Policy",
  "DPA",
  "Terms of Service",
  "Subprocessors",
  "Privacy Policy",
];

const hashToTabMap = {
  "#cookie": "Cookie Policy",
  "#dpa": "DPA",
  "#terms": "Terms of Service",
  "#sub": "Subprocessors",
  "#privacy": "Privacy Policy",
};

const content = {
  "Cookie Policy": (
    <>
      <p className="mb-2 text-xl font-semibold">What is a cookie</p>
      <p className="mb-6 text-sm">
        Cookies are files with a small amount of data which may include an
        anonymous unique identifier.
      </p>
      <p className="mb-6 text-sm">
        They are sent to your browser from a website and stored on your device.
      </p>
      <p className="mb-2 text-xl font-semibold">How Openlane Uses Cookies</p>

      <p className="mb-6 text-sm">
        Openlane uses cookies and similar technologies like local storage to
        track activity on our service and hold certain information.
      </p>
      <p className="mb-6 text-sm">
        We distinguish between two different types of cookies:
      </p>
      <p className="mb-6 text-sm">
        Essential: Cookies that are strictly necessary for basic website or app
        functionality.
      </p>
      <p className="mb-6 text-sm">
        Marketing: Cookies that are used to identify users and collect
        information about their behavior.
      </p>
      <p className="mb-6 text-sm">Openlane only uses essential cookies.</p>
      <p className="mb-2 text-xl font-semibold"> Third Party Cookies</p>

      <p className="mb-6 text-sm">
        We use third-party payment provided by Stripe to process payments and
        prevent fraud.
      </p>

      <p className="mb-6 text-sm">
        For more information, see the official Stripe privacy policy.
      </p>
    </>
  ),
  DPA: (
    <>
      <p className="mb-6 text-sm">
        This Data Processing Addendum, including the Standard Contractual
        Clauses (as defined below) attached hereto (collectively, the "DPA" or
        "Addendum"), is made and entered into as of the effective date (the
        "Effective Date") of the applicable customer's ("Customer") acceptance
        of the Terms of Service between theopenlane, Inc. (“Company” or
        “Openlane”) and Customer to which this DPA is attached and incorporated
        (the "Agreement"). All capitalized terms not otherwise defined in this
        DPA will have the meaning given to them in the Agreement.
      </p>
      <p className="mb-6 text-sm">
        This Addendum shall become legally binding upon Customer entering into
        the Agreement or upon execution of this Addendum.
      </p>
      <p className="mb-2 text-xl font-semibold">Definitions</p>
      <p className="mb-6 text-sm">
        “Affiliate” means (i) an entity of which a party directly or indirectly
        owns fifty percent (50%) or more of the stock or other equity interest,
        (ii) an entity that owns at least fifty percent (50%) or more of the
        stock or other equity interest of a party, or (iii) an entity which is
        under common control with a party by having at least fifty percent (50%)
        or more of the stock or other equity interest of such entity and a party
        owned by the same person, but such entity shall only be deemed to be an
        Affiliate so long as such ownership exists.
      </p>

      <p className="mb-6 text-sm">
        "Data Subject" means (i) an identified or identifiable natural person
        who is in the EEA or whose rights are protected by EU Data Protection
        Laws; or (ii) a "Consumer" as the term is defined in the CCPA.
      </p>
      <p className="mb-6 text-sm">
        "Customer Data" means any content, data, information or other materials
        (including Personal Information) submitted or shared by or for Customer
        to or through the Service.
      </p>
      <p className="mb-6 text-sm">
        "Personal Information" means information relating to a living individual
        or household who is, relates to, describes or can be, reasonably
        identified or linked, directly or indirectly from information, either
        alone or in conjunction with other information, within the Company's or
        Customer's control and which is stored, collected, Processed or
        submitted to or via the Service as Customer Data. Personal information
        includes Personal Data.
      </p>
      <p className="mb-6 text-sm">
        “Authorized Sub-Processor” means a third-party who has a need to know or
        otherwise access Customer’s Personal Data to enable Company to perform
        its obligations under this DPA or the Agreement, and who is authorized
        under Section 4.2 of this DPA.
      </p>
      <p className="mb-6 text-sm">
        {" "}
        “Company Account Data” means personal data that relates to Company’s
        relationship with Customer, including the names or contact information
        of individuals authorized by Customer to access Customer’s account and
        billing information of individuals that Customer has associated with its
        account. Company Account Data also includes any data Company may need to
        collect for the purpose of managing its relationship with Customer,
        identity verification, or as otherwise required by applicable laws and
        regulations.
      </p>
      <p className="mb-6 text-sm">
        “Company Usage Data” means Service usage data collected and processed by
        Company in connection with the provision of the Services, including
        without limitation data used to identify the source and destination of a
        communication, activity logs, and data used to optimize and maintain
        performance of the Services, and to investigate and prevent system
        abuse.
      </p>
      <p className="mb-6 text-sm">“Data Exporter” means Customer.</p>
      <p className="mb-6 text-sm">“Data Importer” means Company.</p>
      <p className="mb-6 text-sm">
        {" "}
        “Data Protection Laws” means any applicable laws and regulations in any
        relevant jurisdiction relating to the use or processing of Personal Data
        including: (i) the California Consumer Privacy Act (“CCPA”), (ii) the
        General Data Protection Regulation (Regulation (EU) 2016/679) (“EU
        GDPR”) and the EU GDPR as it forms part of the law of England and Wales
        by virtue of section 3 of the European Union (Withdrawal) Act 2018 (the
        “UK GDPR”) (together, collectively, the “GDPR”), (iii) the Swiss Federal
        Act on Data Protection, ; (iv) the UK Data Protection Act 2018; and (v)
        the Privacy and Electronic Communications (EC Directive) Regulations
        2003; in each case, as updated, amended or replaced from time to time.
        The terms “Data Subject”, “Personal Data”, “Personal Data Breach”,
        “processing”, “processor,” “controller,” and “supervisory authority”
        shall have the meanings set forth in the GDPR.
      </p>
      <p className="mb-6 text-sm">
        “ex-EEA Transfer” means the transfer of Personal Data, which is
        processed in accordance with the GDPR, from the Data Exporter to the
        Data Importer (or its premises) outside the European Economic Area (the
        “EEA”), and such transfer is not governed by an adequacy decision made
        by the European Commission in accordance with the relevant provisions of
        the GDPR.
      </p>
      <p className="mb-6 text-sm">
        “ex-UK Transfer” means the transfer of Personal Data covered by Chapter
        V of the UK GDPR, which is processed in accordance with the UK GDPR and
        the Data Protection Act 2018, from the Data Exporter to the Data
        Importer (or its premises) outside the United Kingdom (the “UK”), and
        such transfer is not governed by an adequacy decision made by the
        Secretary of State in accordance with the relevant provisions of the UK
        GDPR and the Data Protection Act 2018.
      </p>
      <p className="mb-6 text-sm">
        “Services” shall have the meaning set forth in the Agreement.
      </p>
      <p className="mb-6 text-sm">
        “Standard Contractual Clauses” means the EU SCCs and the UK SCCs.
      </p>
      <p className="mb-6 text-sm">
        “UK SCCs” means the EU SCCs, as amended by the UK Addendum.
      </p>
      <p className="mb-6 text-sm">
        “EU SCCs” means the standard contractual clauses approved by the
        European Commission in Commission Decision 2021/914 dated 4 June 2021,
        for transfers of personal data to countries not otherwise recognized as
        offering an adequate level of protection for personal data by the
        European Commission (as amended and updated from time to time), as
        modified by Section 6.2 of this DPA.
      </p>
      <p className="mb-2 text-xl font-semibold">
        Relationship of the Parties; Processing of Data
      </p>

      <p className="mb-6 text-sm">
        The parties acknowledge and agree that with regard to the processing of
        Personal Data, Customer may act either as a controller or processor and,
        except as expressly set forth in this DPA or the Agreement, Company is a
        processor. Customer shall, in its use of the Services, at all times
        process Personal Data, and provide instructions for the processing of
        Personal Data, in compliance with Data Protection Laws. Customer shall
        ensure that the processing of Personal Data in accordance with
        Customer’s instructions will not cause Company to be in breach of the
        Data Protection Laws. Customer is solely responsible for the accuracy,
        quality, and legality of (i) the Personal Data provided to Company by or
        on behalf of Customer, (ii) the means by which Customer acquired any
        such Personal Data, and (iii) the instructions it provides to Company
        regarding the processing of such Personal Data. Customer shall not
        provide or make available to Company any Personal Data in violation of
        the Agreement or otherwise inappropriate for the nature of the Services,
        and shall indemnify Company from all claims and losses in connection
        therewith.
      </p>
      <p className="mb-6 text-sm">
        Company shall not process Personal Data (i) for purposes other than
        those set forth in the Agreement and/or Exhibit A, (ii) in a manner
        inconsistent with the terms and conditions set forth in this DPA or any
        other documented instructions provided by Customer, including with
        regard to transfers of personal data to a third country or an
        international organization, unless required to do so by Supervisory
        Authority to which the Company is subject; in such a case, the Company
        shall inform the Customer of that legal requirement before processing,
        unless that law prohibits such information on important grounds of
        public interest, or (iii) in violation of Data Protection Laws. Customer
        hereby instructs Company to process Personal Data in accordance with the
        foregoing and as part of any processing initiated by Customer in its use
        of the Services.
      </p>
      <p className="mb-6 text-sm">
        The subject matter, nature, purpose, and duration of this processing, as
        well as the types of Personal Data collected and categories of Data
        Subjects, are described in Exhibit A to this DPA.
      </p>
      <p className="mb-6 text-sm">
        Following completion of the Services, at Customer’s choice, Company
        shall return or delete Customer’s Personal Data, unless further storage
        of such Personal Data is required or authorized by applicable law. If
        return or destruction is impracticable or prohibited by law, rule or
        regulation, Company shall take measures to block such Personal Data from
        any further processing (except to the extent necessary for its continued
        hosting or processing required by law, rule or regulation) and shall
        continue to appropriately protect the Personal Data remaining in its
        possession, custody, or control. If Customer and Company have entered
        into Standard Contractual Clauses as described in Section 6 (Transfers
        of Personal Data), the parties agree that the certification of deletion
        of Personal Data that is described in Clause 8.1(d) and Clause 8.5 of
        the EU SCCs (as applicable) shall be provided by Company to Customer
        only upon Customer’s request.
      </p>
      <p className="mb-6 text-sm">
        CCPA. Except with respect to Company Account Data and Company Usage
        Data, the parties acknowledge and agree that Company is a service
        provider for the purposes of the CCPA (to the extent it applies) and is
        receiving personal information from Customer in order to provide the
        Services pursuant to the Agreement, which constitutes a business
        purpose. Company shall not sell any such personal information. Company
        shall not retain, use or disclose any personal information provided by
        Customer pursuant to the Agreement except as necessary for the specific
        purpose of performing the Services for Customer pursuant to the
        Agreement, or otherwise as set forth in the Agreement or as permitted by
        the CCPA. The terms “personal information,” “service provider,” “sale,”
        and “sell” are as defined in Section 1798.140 of the CCPA. Company
        certifies that it understands the restrictions of this Section 2.5.
      </p>
      <p className="mb-2 text-xl font-semibold">Confidentiality</p>
      <p className="mb-6 text-sm">
        Company shall ensure that any person it authorizes to process Personal
        Data has agreed to protect Personal Data in accordance with Company’s
        confidentiality obligations in the Agreement. Customer agrees that
        Company may disclose Personal Data to its advisers, auditors or other
        third parties as reasonably required in connection with the performance
        of its obligations under this DPA, the Agreement, or the provision of
        Services to Customer.
      </p>
      <p className="mb-2 text-xl font-semibold">Authorized Sub-Processors</p>

      <p className="mb-6 text-sm">
        Customer acknowledges and agrees that Company may (1) engage its
        Affiliates as well as the Authorized Sub-Processors on the List (defined
        below) to access and process Personal Data in connection with the
        Services and (2) from time to time engage additional third parties for
        the purpose of providing the Services, including without limitation the
        processing of Personal Data. By way of this DPA, Customer provides
        general written authorization to Company to engage sub-processors as
        necessary to perform the Services.
      </p>
      <p className="mb-6 text-sm">
        A list of Company’s current Authorized Sub-Processors (the “List”) is
        available to Customer at https://theopenlane.io/legal/subprocessors.
        Such List may be updated by Company from time to time. Company shall
        specifically inform the Customer in writing of any intended changes to
        that list through the addition or replacement of sub-processors at least
        fourteen (14) days in advance, thereby giving the Customer sufficient
        time to be able to object to such changes prior to the engagement of the
        sub-processor(s).
      </p>
      <p className="mb-6 text-sm">
        If Customer reasonably objects to an engagement in accordance with
        Section 4.2, and Company cannot provide a commercially reasonable
        alternative within a reasonable period of time, Customer may discontinue
        the use of the affected Service by providing written notice to Company.
        Discontinuation shall not relieve Customer of any fees owed to Company
        under the Agreement.
      </p>
      <p className="mb-6 text-sm">
        If Customer does not object to the engagement of a third party in
        accordance with Section 4.2 within fourteen (14) days of notice by
        Company, that third party will be deemed an Authorized Sub-Processor for
        the purposes of this DPA.
      </p>
      <p className="mb-6 text-sm">
        Company will enter into a written agreement with the Authorized
        Sub-Processor imposing on the Authorized Sub-Processor data protection
        obligations comparable to those imposed on Company under this DPA with
        respect to the protection of Personal Data. In case an Authorized
        Sub-Processor fails to fulfill its data protection obligations under
        such written agreement with Company, Company will remain liable to
        Customer for the performance of the Authorized Sub-Processor’s
        obligations under such agreement.
      </p>
      <p className="mb-6 text-sm">
        If Customer and Company have entered into Standard Contractual Clauses
        as described in Section 6 (Transfers of Personal Data), (i) the above
        authorizations will constitute Customer’s prior written consent to the
        subcontracting by Company of the processing of Personal Data if such
        consent is required under the Standard Contractual Clauses, and (ii) the
        parties agree that the copies of the agreements with Authorized
        Sub-Processors that must be provided by Company to Customer pursuant to
        Clause 9(c) of the EU SCCs may have commercial information, or
        information unrelated to the Standard Contractual Clauses or their
        equivalent, removed by the Company beforehand, and that such copies will
        be provided by the Company only upon request by Customer.
      </p>
      <p className="mb-2 text-xl font-semibold">Security of Personal Data</p>
      <p className="mb-6 text-sm">
        Taking into account the state of the art, the costs of implementation
        and the nature, scope, context and purposes of processing as well as the
        risk of varying likelihood and severity for the rights and freedoms of
        natural persons, Company shall maintain appropriate technical and
        organizational measures to ensure a level of security appropriate to the
        risk of processing Personal Data. Exhibit C sets forth additional
        information about Company’s technical and organizational security
        measures.
      </p>
      <p className="mb-2 text-xl font-semibold">Transfers of Personal Data</p>

      <p className="mb-6 text-sm">
        The parties agree that Company may transfer Personal Data processed
        under this DPA outside the EEA, the UK, or Switzerland as necessary to
        provide the Services. Customer acknowledges that Company’s primary
        processing operations take place in the United States, and that the
        transfer of Customer’s Personal Data to the United States is necessary
        for the provision of the Services to Customer. If Company transfers
        Personal Data protected under this DPA to a jurisdiction for which the
        European Commission has not issued an adequacy decision, Company will
        ensure that appropriate safeguards have been implemented for the
        transfer of Personal Data in accordance with Data Protection Laws.
      </p>
      <p className="mb-6 text-sm">
        Ex-EEA Transfers. The parties agree that ex-EEA Transfers are made
        pursuant to the EU SCCs, which are deemed entered into (and incorporated
        into this DPA by this reference) and completed as follows:
      </p>
      <p className="mb-6 text-sm">
        Module One (Controller to Controller) of the EU SCCs apply when Company
        is processing Personal Data as a controller pursuant to Section 9 of
        this DPA.
      </p>
      <p className="mb-6 text-sm">
        Module Two (Controller to Processor) of the EU SCCs apply when Customer
        is a controller and Company is processing Personal Data for Customer as
        a processor pursuant to Section 2 of this DPA.
      </p>
      <p className="mb-6 text-sm">
        Module Three (Processor to Sub-Processor) of the EU SCCs apply when
        Customer is a processor and Company is processing Personal Data on
        behalf of Customer as a sub-processor.
      </p>
      <p className="mb-6 text-sm">
        For each module, where applicable the following applies:
      </p>
      <p className="mb-6 text-sm">
        The optional docking clause in Clause 7 does not apply.
      </p>
      <p className="mb-6 text-sm">
        In Clause 9, Option 2 (general written authorization) applies, and the
        minimum time period for prior notice of sub-processor changes shall be
        as set forth in Section 4.2 of this DPA;
      </p>
      <p className="mb-6 text-sm">
        In Clause 11, the optional language does not apply;
      </p>
      <p className="mb-6 text-sm">
        All square brackets in Clause 13 are hereby removed;
      </p>
      <p className="mb-6 text-sm">
        In Clause 17 (Option 1), the EU SCCs will be governed by Ireland law.
      </p>
      <p className="mb-6 text-sm">
        In Clause 18(b), disputes will be resolved before the courts of Ireland;
      </p>
      <p className="mb-6 text-sm">
        Exhibit B to this DPA contains the information required in Annex I and
        Annex III of the EU SCCs;
      </p>
      <p className="mb-6 text-sm">
        Exhibit C to this DPA contains the information required in Annex II of
        the EU SCCs; and
      </p>
      <p className="mb-6 text-sm">
        By entering into this DPA, the parties are deemed to have signed the EU
        SCCs incorporated herein, including their Annexes.
      </p>
      <p className="mb-6 text-sm">
        Ex-UK Transfers. The parties agree that ex-UK Transfers are made
        pursuant to the UK SCCs, which are deemed entered into and incorporated
        into this DPA by reference, and amended and completed in accordance with
        the UK Addendum, which is incorporated herein as Exhibit A of this DPA.
      </p>
      <p className="mb-6 text-sm">
        Transfers from Switzerland. The parties agree that transfers from
        Switzerland are made pursuant to the EU SCCs with the following
        modifications:
      </p>
      <p className="mb-6 text-sm">
        The terms “General Data Protection Regulation” or “Regulation (EU)
        2016/679” as utilized in the EU SCCs shall be interpreted to include the
        Federal Act on Data Protection of 19 June 1992 (the “FADP,” and as
        revised as of 25 September 2020, the “Revised FADP”) with respect to
        data transfers subject to the FADP.
      </p>
      <p className="mb-6 text-sm">
        The terms of the EU SCCs shall be interpreted to protect the data of
        legal entities until the effective date of the Revised FADP.
      </p>
      <p className="mb-6 text-sm">
        Clause 13 of the EU SCCs is modified to provide that the Federal Data
        Protection and Information Commissioner (“FDPIC”) of Switzerland shall
        have authority over data transfers governed by the FADP and the
        appropriate EU supervisory authority shall have authority over data
        transfers governed by the GDPR. Subject to the foregoing, all other
        requirements of Section 13 shall be observed.
      </p>
      <p className="mb-6 text-sm">
        The term “EU Member State” as utilized in the EU SCCs shall not be
        interpreted in such a way as to exclude Data Subjects in Switzerland
        from exercising their rights in their place of habitual residence in
        accordance with Clause 18(c) of the EU SCCs.
      </p>
      <p className="mb-6 text-sm">
        Supplementary Measures. In respect of any ex-EEA Transfer or ex-UK
        Transfer, the following supplementary measures shall apply:
      </p>
      <p className="mb-6 text-sm">
        As of the date of this DPA, the Data Importer has not received any
        formal legal requests from any government intelligence or security
        service/agencies in the country to which the Personal Data is being
        exported, for access to (or for copies of) Customer’s Personal Data
        (“Government Agency Requests”);
      </p>
      <p className="mb-6 text-sm">
        If, after the date of this DPA, the Data Importer receives any
        Government Agency Requests, Company shall attempt to redirect the law
        enforcement or government agency to request that data directly from
        Customer. As part of this effort, Company may provide Customer’s basic
        contact information to the government agency. If compelled to disclose
        Customer’s Personal Data to a law enforcement or government agency,
        Company shall give Customer reasonable notice of the demand and
        cooperate to allow Customer to seek a protective order or other
        appropriate remedy unless Company is legally prohibited from doing so.
        Company shall not voluntarily disclose Personal Data to any law
        enforcement or government agency. Data Exporter and Data Importer shall
        (as soon as reasonably practicable) discuss and determine whether all or
        any transfers of Personal Data pursuant to this DPA should be suspended
        in the light of the such Government Agency Requests; and
      </p>
      <p className="mb-6 text-sm">
        The Data Exporter and Data Importer will meet as needed to consider
        whether:
      </p>
      <p className="mb-6 text-sm">
        the protection afforded by the laws of the country of the Data Importer
        to data subjects whose Personal Data is being transferred is sufficient
        to provide broadly equivalent protection to that afforded in the EEA or
        the UK, whichever the case may be;
      </p>
      <p className="mb-6 text-sm">
        additional measures are reasonably necessary to enable the transfer to
        be compliant with the Data Protection Laws; and 6.6.3.3. it is still
        appropriate for Personal Data to be transferred to the relevant Data
        Importer, taking into account all relevant information available to the
        parties, together with guidance provided by the supervisory authorities.
      </p>
      <p className="mb-6 text-sm">
        If Data Protection Laws require the Data Exporter to execute the
        Standard Contractual Clauses applicable to a particular transfer of
        Personal Data to a Data Importer as a separate agreement, the Data
        Importer shall, on request of the Data Exporter, promptly execute such
        Standard Contractual Clauses incorporating such amendments as may
        reasonably be required by the Data Exporter to reflect the applicable
        appendices and annexes, the details of the transfer and the requirements
        of the relevant Data Protection Laws.
      </p>
      <p className="mb-6 text-sm">
        {" "}
        If either (i) any of the means of legitimizing transfers of Personal
        Data outside of the EEA or UK set forth in this DPA cease to be valid or
        (ii) any supervisory authority requires transfers of Personal Data
        pursuant to those means to be suspended, then Data Importer may by
        notice to the Data Exporter, with effect from the date set out in such
        notice, amend or put in place alternative arrangements in respect of
        such transfers, as required by Data Protection Laws.
      </p>
      <p className="mb-2 text-xl font-semibold">Rights of Data Subjects</p>

      <p className="mb-6 text-sm">
        Company shall, to the extent permitted by law, notify Customer upon
        receipt of a request by a Data Subject to exercise the Data Subject’s
        right of: access, rectification, erasure, data portability, restriction
        or cessation of processing, withdrawal of consent to processing, and/or
        objection to being subject to processing that constitutes automated
        decision-making (such requests individually and collectively “Data
        Subject Request(s)”). If Company receives a Data Subject Request in
        relation to Customer’s data, Company will advise the Data Subject to
        submit their request to Customer and Customer will be responsible for
        responding to such request, including, where necessary, by using the
        functionality of the Services. Customer is solely responsible for
        ensuring that Data Subject Requests for erasure, restriction or
        cessation of processing, or withdrawal of consent to processing of any
        Personal Data are communicated to Company, and, if applicable, for
        ensuring that a record of consent to processing is maintained with
        respect to each Data Subject.
      </p>
      <p className="mb-6 text-sm">
        Company shall, at the request of the Customer, and taking into account
        the nature of the processing applicable to any Data Subject Request,
        apply appropriate technical and organizational measures to assist
        Customer in complying with Customer’s obligation to respond to such Data
        Subject Request and/or in demonstrating such compliance, where possible,
        provided that (i) Customer is itself unable to respond without Company’s
        assistance and (ii) Company is able to do so in accordance with all
        applicable laws, rules, and regulations. Customer shall be responsible
        to the extent legally permitted for any costs and expenses arising from
        any such assistance by Company.
      </p>
      <p className="mb-2 text-xl font-semibold">
        Actions and Access Requests; Audits
      </p>

      <p className="mb-6 text-sm">
        Company shall, taking into account the nature of the processing and the
        information available to Company, provide Customer with reasonable
        cooperation and assistance where necessary for Customer to comply with
        its obligations under the GDPR to conduct a data protection impact
        assessment and/or to demonstrate such compliance, provided that Customer
        does not otherwise have access to the relevant information. Customer
        shall be responsible to the extent legally permitted for any costs and
        expenses arising from any such assistance by Company.
      </p>
      <p className="mb-6 text-sm">
        Company shall, taking into account the nature of the processing and the
        information available to Company, provide Customer with reasonable
        cooperation and assistance with respect to Customer’s cooperation and/or
        prior consultation with any Supervisory Authority, where necessary and
        where required by the GDPR. Customer shall be responsible to the extent
        legally permitted for any costs and expenses arising from any such
        assistance by Company.
      </p>
      <p className="mb-6 text-sm">
        Company shall maintain records sufficient to demonstrate its compliance
        with its obligations under this DPA, and retain such records for a
        period of three (3) years after the termination of the Agreement.
        Customer shall, with reasonable notice to Company, have the right to
        review, audit and copy such records at Company’s offices during regular
        business hours.
      </p>
      <p className="mb-6 text-sm">
        Upon Customer’s written request at reasonable intervals, and subject to
        reasonable confidentiality controls, Company shall, either (i) make
        available for Customer’s review copies of certifications or reports
        demonstrating Company’s compliance with prevailing data security
        standards applicable to the processing of Customer’s Personal Data, or
        (ii) if the provision of reports or certifications pursuant to (i) is
        not reasonably sufficient under Data Protection Laws, allow Customer’s
        independent third party representative to conduct an audit or inspection
        of Company’s data security infrastructure and procedures that is
        sufficient to demonstrate Company’s compliance with its obligations
        under Data Protection Laws, provided that (a) Customer provides
        reasonable prior written notice of any such request for an audit and
        such inspection shall not be unreasonably disruptive to Company’s
        business; (b) such audit shall only be performed during business hours
        and occur no more than once per calendar year; and (c) such audit shall
        be restricted to data relevant to Customer. Customer shall be
        responsible for the costs of any such audits or inspections, including
        without limitation a reimbursement to Company for any time expended for
        on-site audits. If Customer and Company have entered into Standard
        Contractual Clauses as described in Section 6 (Transfers of Personal
        Data), the parties agree that the audits described in Clause 8.9 of the
        EU SCCs shall be carried out in accordance with this Section 8.4.
      </p>
      <p className="mb-6 text-sm">
        Company shall immediately notify Customer if an instruction, in the
        Company’s opinion, infringes the Data Protection Laws or Supervisory
        Authority.
      </p>
      <p className="mb-6 text-sm">
        In the event of a Personal Data Breach, Company shall, without undue
        delay, inform Customer of the Personal Data Breach and take such steps
        as Company in its sole discretion deems necessary and reasonable to
        remediate such violation (to the extent that remediation is within
        Company’s reasonable control).
      </p>
      <p className="mb-6 text-sm">
        The obligations described in Sections 8.6 and 8.7 shall not apply in the
        event that a Personal Data Breach results from the actions or omissions
        of Customer. Company’s obligation to report or respond to a Personal
        Data Breach under Sections 8.6 and 8.7 will not be construed as an
        acknowledgement by Company of any fault or liability with respect to the
        Personal Data Breach.
      </p>
      <p className="mb-2 text-xl font-semibold">
        Company’s Role as a Controller
      </p>

      <p className="mb-6 text-sm">
        The parties acknowledge and agree that with respect to Company Account
        Data and Company Usage Data, Company is an independent controller, not a
        joint controller with Customer. Company will process Company Account
        Data and Company Usage Data as a controller (i) to manage the
        relationship with Customer; (ii) to carry out Company’s core business
        operations, such as accounting, audits, tax preparation and filing and
        compliance purposes; (iii) to monitor, investigate, prevent and detect
        fraud, security incidents and other misuse of the Services, and to
        prevent harm to Customer; (iv) for identity verification purposes; (v)
        to comply with legal or regulatory obligations applicable to the
        processing and retention of Personal Data to which Company is subject;
        and (vi) as otherwise permitted under Data Protection Laws and in
        accordance with this DPA and the Agreement. Company may also process
        Company Usage Data as a controller to provide, optimize, and maintain
        the Services, to the extent permitted by Data Protection Laws. Any
        processing by the Company as a controller shall be in accordance with
        the Company’s privacy policy set forth at
        https://theopenlane.io/legal/privacy.
      </p>
      <p className="mb-2 text-xl font-semibold">Conflict</p>

      <p className="mb-6 text-sm">
        In the event of any conflict or inconsistency among the following
        documents, the order of precedence will be: (1) the applicable terms in
        the Standard Contractual Clauses; (2) the terms of this DPA; (3) the
        Agreement; and (4) the Company’s privacy policy. Any claims brought in
        connection with this DPA will be subject to the terms and conditions,
        including, but not limited to, the exclusions and limitations set forth
        in the Agreement.
      </p>

      <p className="mb-2 text-xl font-semibold">List of Parties</p>
      <p className="mb-6 text-sm">Data Exporter:</p>
      <p className="mb-6 text-sm">
        Name: Customer, as specific in the Agreement.
      </p>
      <p className="mb-6 text-sm">Contact: As specified in the Agreement.</p>
      <p className="mb-6 text-sm">
        Signature and date: The parties agree that execution of the Agreement by
        the Data Importer and the Data Exporter shall constitute execution of
        these Clauses by both parties on the Effective Date of the Agreement.
      </p>
      <p className="mb-6 text-sm">Role: Controller/Processor</p>
      <p className="mb-6 text-sm">Data Importer:</p>
      <p className="mb-6 text-sm">Name: theopenlane, Inc.</p>
      <p className="mb-6 text-sm">
        Address: 5150 Broadway St., San Antonio TX, 78209
      </p>
      <p className="mb-6 text-sm">
        Contact: Openlane Security - security@theopenlane.io
      </p>
      <p className="mb-6 text-sm">
        Signature and date: The parties agree that execution of the Agreement by
        the Data Importer and the Data Exporter shall constitute execution of
        these Clauses by both parties on the Effective Date of the Agreement.
      </p>
      <p className="mb-6 text-sm">Role: Processor</p>
      <p className="mb-2 text-xl font-semibold">
        Technical and Organizational Security Measures
      </p>
      <p className="mb-6 text-sm">
        Openlane will maintain administrative, physical, and technical
        safeguards designed for protection of the security, confidentiality, and
        integrity of Personal Information uploaded to the Service, as described
        in this annex.
      </p>
      <p className="mb-2 text-xl font-semibold">SECURITY GOVERNANCE</p>
      <p className="mb-6 text-sm">
        Openlane maintains an information security program (including the
        adoption and enforcement of internal policies and procedures) designed
        to: (a) help our customers secure their data processed using Openlane's
        online product against accidental or unlawful loss, access, or
        disclosure, (b) identify reasonably foreseeable and internal risks to
        security and unauthorized access to the Openlane's online product, and
        (c) minimize security risks, including through risk assessment and
        regular testing. Openlane's head of security coordinates and is
        primarily responsible for the company’s information security program.
      </p>
      <p className="mb-6 text-sm">
        The team covers the following core functions:
      </p>
      <p className="mb-6 text-sm">
        Application security (secure development, security feature design, the
        Security Champions program, and secure development training)
      </p>
      <p className="mb-6 text-sm">
        Infrastructure security (data centers, cloud security, and strong
        authentication)
      </p>
      <p className="mb-6 text-sm">
        Monitoring and incident response (cloud native and custom)
      </p>
      <p className="mb-6 text-sm">
        Vulnerability management (vulnerability scanning and resolution)
      </p>
      <p className="mb-6 text-sm">Compliance and technical privacy</p>
      <p className="mb-6 text-sm">
        Security awareness (onboarding training and awareness campaigns)
      </p>
      <p className="mb-2 text-xl font-semibold">
        Technical and Organizational Security Measures
      </p>
      <p className="mb-2 text-xl font-semibold">ACCESS CONTROL</p>
      <p className="mb-6 text-sm">Preventing Unauthorized Product Access</p>
      <p className="mb-6 text-sm">
        Third party data hosting and processing: We host our Service with third
        party cloud infrastructure providers. Additionally, we maintain
        contractual relationships with vendors in order to provide the Service
        in accordance with the DPA. We rely on contractual agreements, privacy
        policies, and vendor compliance programs in order to protect data
        processed or stored by these vendors.
      </p>
      <p className="mb-6 text-sm">
        Physical and environmental security: We host our product infrastructure
        with multi-tenant, outsourced infrastructure providers. The physical and
        environmental security controls of such providers are audited for SOC 2
        Type II and ISO 27001 compliance, among other certifications.
      </p>
      <p className="mb-6 text-sm">
        Authentication: Customers who interact with the products via the user
        interface are required to authenticate before they are able to access
        their non-public data. We support two-factor authentication via social
        login as well as Single-Sign On.
      </p>
      <p className="mb-6 text-sm">
        Authorization: Customer Content (data originated by customers that a
        customer transmits through Openlane) is stored in multi-tenant storage
        systems which are only accessible to Customers via application user
        interfaces and application programming interfaces. Customers are not
        allowed direct access to the underlying application infrastructure. The
        authorization model in each of our products is designed to ensure that
        only the appropriately assigned individuals can access relevant
        features, views, and customization options. Authorization to data sets
        is performed through validating the user’s permissions against the
        attributes associated with each data set.
      </p>
      <p className="mb-6 text-sm">
        Application Programming Interface (API) access: Public product APIs may
        be accessed using an API key or through OAuth authorization.
        Authorization credentials are stored encrypted.
      </p>
      <p className="mb-6 text-sm">
        Preventing Unauthorized Product Use. We implement industry-standard
        access controls and detection capabilities for the internal networks
        that support our products.
      </p>
      <p className="mb-6 text-sm">
        Access controls: Network access control mechanisms are designed to
        prevent network traffic using unauthorized protocols from reaching the
        product infrastructure. The technical measures implemented differ
        between infrastructure providers and include Virtual Private Cloud (VPC)
        implementations, security group assignment, and traditional firewall
        rules.
      </p>
      <p className="mb-6 text-sm">
        Static code analysis: Automated security reviews of code stored in our
        source code repositories, performed through static code analysis,
        checking for coding best practices and identifiable software
        vulnerabilities.
      </p>
      <p className="mb-6 text-sm">
        Penetration testing: We maintain relationships with industry-recognized
        penetration testing service providers for annual penetration tests. The
        intent of the penetration tests is to identify and resolve foreseeable
        attack vectors and potential abuse scenarios.
      </p>
      <p className="mb-6 text-sm">
        Limitations of Privilege & Authorization Requirements
      </p>
      <p className="mb-6 text-sm">
        Product access: A subset of our personnel have access to the products
        and to customer data via controlled interfaces. The intent of providing
        access to a subset of personnel is to provide effective customer
        support, troubleshoot potential problems, detect, and respond to
        security incidents, and implement data security.
      </p>

      <p className="mb-6 text-sm">
        Personnel Security: Openlane personnel are required to conduct
        themselves in a manner consistent with the company’s guidelines
        regarding confidentiality, business ethics, appropriate usage, and
        professional standards. Openlane conducts reasonably appropriate
        background checks to the extent legally permissible and in accordance
        with applicable local law and regulations.
      </p>
      <p className="mb-6 text-sm">
        Personnel are required to execute a confidentiality agreement and must
        acknowledge receipt of, and compliance with, Openlane confidentiality
        and security policies. Personnel are provided with security training.
      </p>
      <p className="mb-2 text-xl font-semibold">ENCRYPTION TECHNOLOGIES</p>

      <p className="mb-6 text-sm">
        In-transit: We make HTTPS encryption (also referred to as SSL or TLS)
        available on all our interfaces. Our HTTPS implementation uses
        industry-standard algorithms and certificates.
      </p>
      <p className="mb-6 text-sm">
        At-rest: We store user passwords following policies that follow industry
        standard practices for security. We have implemented technologies to
        ensure that stored data is encrypted at rest.
      </p>
      <p className="mb-2 text-xl font-semibold">INPUT CONTROLS</p>

      <p className="mb-6 text-sm">
        Detection: We designed our infrastructure to log extensive information
        about the system behavior, traffic received, system authentication, and
        other application requests. Internal systems aggregate log data and
        alert appropriate personnel of malicious, unintended, or anomalous
        activities. Our personnel, including security, operations, and support
        personnel, are responsive to known incidents.
      </p>
      <p className="mb-6 text-sm">
        Response and tracking: We maintain a record of known security incidents
        that includes description, dates and times of relevant activities, and
        incident disposition. Suspected and confirmed security incidents are
        investigated by security, operations, and/or support personnel; and
        appropriate resolution steps are identified and documented. For any
        confirmed incidents, we will take appropriate steps to minimize product
        and customer damage or unauthorized disclosure. Notifications will be in
        accordance with the terms of the Agreement.
      </p>
      <p className="mb-6 text-sm">
        DATA DELETION AND PORTABILITY. Openlane enables customers to request
        deletion or export of their account and data in a manner consistent with
        the functionality of the Openlane product.
      </p>
      <p className="mb-6 text-sm">
        AVAILABILITY CONTROLS. Openlane products are designed to ensure
        redundancy and seamless failover. The server instances that support the
        products are also architected with a goal to prevent single points of
        failure. This design assists our operations in maintaining and updating
        the product applications and backend while limiting downtime.
      </p>
      <p className="mb-6 text-sm">
        Redundancy: The infrastructure providers use designs to eliminate single
        points of failure and minimize the impact of anticipated environmental
        risks. Openlane's product is designed to allow the company to perform
        certain types of preventative and corrective maintenance without
        interruption.
      </p>
      <p className="mb-6 text-sm">
        Business Continuity: Openlane has designed and regularly plans and tests
        its business continuity planning/disaster recovery programs.
      </p>
    </>
  ),
  "Terms of Service": (
    <>
      <p className="mb-2 text-xl font-semibold">Welcome to theopenlane, Inc.</p>
      <p className="mb-6 text-sm">
        The website located at www.theopenlane.io (the “Site”) is a copyrighted
        work belonging to theopenlane, Inc. (“Company”, “us”, “our”, and “we”).
        Certain features of the Site may be subject to additional guidelines,
        terms, or rules, which will be posted on the Site in connection with
        such features. All such additional terms, guidelines, and rules are
        incorporated by reference into these Terms.
      </p>
      <p className="mb-6 text-sm">
        These Terms of Use (these “Terms”) set forth the legally binding terms
        and conditions that govern your use of the Site. By accessing or using
        the Site, you are accepting these Terms (on behalf of yourself or the
        entity that you represent), and you represent and warrant that you have
        the right, authority, and capacity to enter into these Terms (on behalf
        of yourself or the entity that you represent). you may not access or use
        the Site or accept the Terms if you are not at least 18 years old. If
        you do not agree with all of the provisions of these Terms, do not
        access and/or use the Site.
      </p>
      <p className="mb-6 text-sm font-semibold">
        PLEASE BE AWARE THAT SECTION 8.2 CONTAINS PROVISIONS GOVERNING HOW TO
        RESOLVE DISPUTES BETWEEN YOU AND COMPANY. AMONG OTHER THINGS, SECTION
        8.2 INCLUDES AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED
        EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY
        BINDING AND FINAL ARBITRATION. SECTION 8.2 ALSO CONTAINS A CLASS ACTION
        AND JURY TRIAL WAIVER. PLEASE READ SECTION 8.2 CAREFULLY.
      </p>
      <p className="mb-6 text-sm font-semibold">
        UNLESS YOU OPT OUT OF THE AGREEMENT TO ARBITRATE WITHIN 30 DAYS: (1) YOU
        WILL ONLY BE PERMITTED TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF
        AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN
        ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING AND YOU WAIVE YOUR
        RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE
        ARBITRATION; AND (2) YOU ARE WAIVING YOUR RIGHT TO PURSUE DISPUTES OR
        CLAIMS AND SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL.
      </p>
      <p className="mb-2 text-xl font-semibold">Accounts</p>

      <p className="mb-6 text-sm">
        Account Creation. In order to use certain features of the Site, you must
        register for an account (“Account”) and provide certain information
        about yourself as prompted by the account registration form. You
        represent and warrant that: (a) all required registration information
        you submit is truthful and accurate; (b) you will maintain the accuracy
        of such information. You may delete your Account at any time, for any
        reason, by following the instructions on the Site. Company may suspend
        or terminate your Account in accordance with Section 7.
      </p>
      <p className="mb-6 text-sm">
        Account Responsibilities. You are responsible for maintaining the
        confidentiality of your Account login information and are fully
        responsible for all activities that occur under your Account. You agree
        to immediately notify Company of any unauthorized use, or suspected
        unauthorized use of your Account or any other breach of security.
        Company cannot and will not be liable for any loss or damage arising
        from your failure to comply with the above requirements.
      </p>
      <p className="mb-2 text-xl font-semibold">Access to the Site</p>

      <p className="mb-6 text-sm">
        License. Subject to these Terms, Company grants you a non-transferable,
        non-exclusive, revocable, limited license to use and access the Site
        solely for your own personal, noncommercial use.
      </p>
      <p className="mb-6 text-sm">
        Certain Restrictions. The rights granted to you in these Terms are
        subject to the following restrictions: (a) you shall not license, sell,
        rent, lease, transfer, assign, distribute, host, or otherwise
        commercially exploit the Site, whether in whole or in part, or any
        content displayed on the Site; (b) you shall not modify, make derivative
        works of, disassemble, reverse compile or reverse engineer any part of
        the Site; (c) you shall not access the Site in order to build a similar
        or competitive website, product, or service; and (d) except as expressly
        stated herein, no part of the Site may be copied, reproduced,
        distributed, republished, downloaded, displayed, posted or transmitted
        in any form or by any means. Unless otherwise indicated, any future
        release, update, or other addition to functionality of the Site shall be
        subject to these Terms. All copyright and other proprietary notices on
        the Site (or on any content displayed on the Site) must be retained on
        all copies thereof.
      </p>
      <p className="mb-6 text-sm">
        Modification. Company reserves the right, at any time, to modify,
        suspend, or discontinue the Site (in whole or in part) with or without
        notice to you. You agree that Company will not be liable to you or to
        any third party for any modification, suspension, or discontinuation of
        the Site or any part thereof.
      </p>
      <p className="mb-6 text-sm">
        No Support or Maintenance. You acknowledge and agree that Company will
        have no obligation to provide you with any support or maintenance in
        connection with the Site.
      </p>
      <p className="mb-6 text-sm">
        Ownership. You acknowledge that all the intellectual property rights,
        including copyrights, patents, trade marks, and trade secrets, in the
        Site and its content are owned by Company or Company’s suppliers.
        Neither these Terms (nor your access to the Site) transfers to you or
        any third party any rights, title or interest in or to such intellectual
        property rights, except for the limited access rights expressly set
        forth in Section 2.1. Company and its suppliers reserve all rights not
        granted in these Terms. There are no implied licenses granted under
        these Terms.
      </p>
      <p className="mb-6 text-sm">
        Feedback. If you provide Company with any feedback or suggestions
        regarding the Site (“Feedback”), you hereby assign to Company all rights
        in such Feedback and agree that Company shall have the right to use and
        fully exploit such Feedback and related information in any manner it
        deems appropriate. Company will treat any Feedback you provide to
        Company as non-confidential and non-proprietary. You agree that you will
        not submit to Company any information or ideas that you consider to be
        confidential or proprietary.
      </p>
      <p className="mb-2 text-xl font-semibold">Access to the Site</p>
      <p className="mb-6 text-sm">Indemnification</p>
      <p className="mb-6 text-sm">
        You agree to indemnify and hold Company (and its officers, employees,
        and agents) harmless, including costs and attorneys’ fees, from any
        claim or demand made by any third party due to or arising out of (a)
        your use of the Site, (b) your violation of these Terms or (c) your
        violation of applicable laws or regulations. Company reserves the right,
        at your expense, to assume the exclusive defense and control of any
        matter for which you are required to indemnify us, and you agree to
        cooperate with our defense of these claims. You agree not to settle any
        matter without the prior written consent of Company. Company will use
        reasonable efforts to notify you of any such claim, action or proceeding
        upon becoming aware of it.
      </p>

      <p className="mb-6 text-sm">Indemnification</p>

      <p className="mb-6 text-sm">Third-Party Links & Ads; Other Users</p>
      <p className="mb-6 text-sm">
        Third-Party Links & Ads. The Site may contain links to third-party
        websites and services, and/or display advertisements for third parties
        (collectively, “Third-Party Links & Ads”). Such Third-Party Links & Ads
        are not under the control of Company, and Company is not responsible for
        any Third-Party Links & Ads. Company provides access to these
        Third-Party Links & Ads only as a convenience to you, and does not
        review, approve, monitor, endorse, warrant, or make any representations
        with respect to Third-Party Links & Ads. You use all Third-Party Links &
        Ads at your own risk, and should apply a suitable level of caution and
        discretion in doing so. When you click on any of the Third-Party Links &
        Ads, the applicable third party’s terms and policies apply, including
        the third party’s privacy and data gathering practices. You should make
        whatever investigation you feel necessary or appropriate before
        proceeding with any transaction in connection with such Third-Party
        Links & Ads.
      </p>
      <p className="mb-6 text-sm">
        Other Users. Your interactions with other Site users are solely between
        you and such users. You agree that Company will not be responsible for
        any loss or damage incurred as the result of any such interactions. If
        there is a dispute between you and any Site user, we are under no
        obligation to become involved.
      </p>
      <p className="mb-6 text-sm">
        Release. You hereby release and forever discharge Company (and our
        officers, employees, agents, successors, and assigns) from, and hereby
        waive and relinquish, each and every past, present and future dispute,
        claim, controversy, demand, right, obligation, liability, action and
        cause of action of every kind and nature (including personal injuries,
        death, and property damage), that has arisen or arises directly or
        indirectly out of, or that relates directly or indirectly to, the Site
        (including any interactions with, or act or omission of, other Site
        users or any Third-Party Links & Ads). IF YOU ARE A CALIFORNIA RESIDENT,
        YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH
        THE FOREGOING, WHICH STATES: “A GENERAL RELEASE DOES NOT EXTEND TO
        CLAIMS WHICH THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO
        EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF
        KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT
        WITH THE DEBTOR OR RELEASED PARTY.”
      </p>
      <p className="mb-6 text-sm">Disclaimers</p>

      <p className="mb-6 text-sm">
        THE SITE IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS, AND COMPANY
        (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND
        CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY,
        INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR
        NON-INFRINGEMENT. WE (AND OUR SUPPLIERS) MAKE NO WARRANTY THAT THE SITE
        WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED,
        TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE
        OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE. IF
        APPLICABLE LAW REQUIRES ANY WARRANTIES WITH RESPECT TO THE SITE, ALL
        SUCH WARRANTIES ARE LIMITED IN DURATION TO 90 DAYS FROM THE DATE OF
        FIRST USE.
      </p>
      <p className="mb-6 text-sm">
        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO
        THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT
        ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE
        LIMITATION MAY NOT APPLY TO YOU.
      </p>
      <p className="mb-6 text-lg">Limitation on Liability</p>
      <p className="mb-6 text-sm">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY (OR
        OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS,
        LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT,
        CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES
        ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO
        USE, THE SITE, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE IS AT YOUR OWN DISCRETION
        AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR
        DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA RESULTING THEREFROM.
      </p>
      <p className="mb-6 text-sm">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOTWITHSTANDING ANYTHING TO THE
        CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY DAMAGES ARISING
        FROM OR RELATED TO THESE TERMS (FOR ANY CAUSE WHATSOEVER AND REGARDLESS
        OF THE FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF
        FIFTY US DOLLARS. THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT ENLARGE
        THIS LIMIT. YOU AGREE THAT OUR SUPPLIERS WILL HAVE NO LIABILITY OF ANY
        KIND ARISING FROM OR RELATING TO THESE TERMS.
      </p>
      <p className="mb-6 text-sm">
        SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY
        FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR
        EXCLUSION MAY NOT APPLY TO YOU.
      </p>
      <p className="mb-6 text-sm">
        Term and Termination. Subject to this Section, these Terms will remain
        in full force and effect while you use the Site. We may suspend or
        terminate your rights to use the Site (including your Account) at any
        time for any reason at our sole discretion, including for any use of the
        Site in violation of these Terms. Upon termination of your rights under
        these Terms, your Account and right to access and use the Site will
        terminate immediately. Company will not have any liability whatsoever to
        you for any termination of your rights under these Terms, including for
        termination of your Account. Even after your rights under these Terms
        are terminated, the following provisions of these Terms will remain in
        effect: Sections 2.2 through 2.6 and Sections 3 through 8.
      </p>
      <p className="mb-6 text-sm">
        Changes. These Terms are subject to occasional revision, and if we make
        any substantial changes, we may notify you by sending you an e-mail to
        the last e-mail address you provided to us (if any), and/or by
        prominently posting notice of the changes on our Site. You are
        responsible for providing us with your most current e-mail address. In
        the event that the last e-mail address that you have provided us is not
        valid, or for any reason is not capable of delivering to you the notice
        described above, our dispatch of the e-mail containing such notice will
        nonetheless constitute effective notice of the changes described in the
        notice. Continued use of our Site following notice of such changes shall
        indicate your acknowledgement of such changes and agreement to be bound
        by the terms and conditions of such changes.
      </p>
      <p className="mb-6 text-sm">
        Dispute Resolution. Please read the following arbitration agreement in
        this Section (the “Arbitration Agreement”) carefully. It requires you to
        arbitrate disputes with Company, its parent companies, subsidiaries,
        affiliates, successors and assigns and all of their respective officers,
        directors, employees, agents, and representatives (collectively, the
        “Company Parties”) and limits the manner in which you can seek relief
        from the Company Parties.
      </p>
      <p className="mb-6 text-sm">
        Applicability of Arbitration Agreement. You agree that any dispute
        between you and any of the Company Parties relating in any way to the
        Site, the services offered on the Site (the “Services”) or these Terms
        will be resolved by binding arbitration, rather than in court, except
        that (1) you and the Company Parties may assert individualized claims in
        small claims court if the claims qualify, remain in such court and
        advance solely on an individual, non-class basis; and (2) you or the
        Company Parties may seek equitable relief in court for infringement or
        other misuse of intellectual property rights (such as trademarks, trade
        dress, domain names, trade secrets, copyrights, and patents). This
        Arbitration Agreement shall survive the expiration or termination of
        these Terms and shall apply, without limitation, to all claims that
        arose or were asserted before you agreed to these Terms (in accordance
        with the preamble) or any prior version of these Terms. This Arbitration
        Agreement does not preclude you from bringing issues to the attention of
        federal, state or local agencies. Such agencies can, if the law allows,
        seek relief against the Company Parties on your behalf. For purposes of
        this Arbitration Agreement, “Dispute” will also include disputes that
        arose or involve facts occurring before the existence of this or any
        prior versions of the Agreement as well as claims that may arise after
        the termination of these Terms.
      </p>
      <p className="mb-6 text-sm">
        Informal Dispute Resolution. There might be instances when a Dispute
        arises between you and Company. If that occurs, Company is committed to
        working with you to reach a reasonable resolution. You and Company agree
        that good faith informal efforts to resolve Disputes can result in a
        prompt, low‐cost and mutually beneficial outcome. You and Company
        therefore agree that before either party commences arbitration against
        the other (or initiates an action in small claims court if a party so
        elects), we will personally meet and confer telephonically or via
        videoconference, in a good faith effort to resolve informally any
        Dispute covered by this Arbitration Agreement (“Informal Dispute
        Resolution Conference”). If you are represented by counsel, your counsel
        may participate in the conference, but you will also participate in the
        conference.
      </p>

      <p className="mb-6 text-sm">
        The party initiating a Dispute must give notice to the other party in
        writing of its intent to initiate an Informal Dispute Resolution
        Conference (“Notice”), which shall occur within 45 days after the other
        party receives such Notice, unless an extension is mutually agreed upon
        by the parties. Notice to Company that you intend to initiate an
        Informal Dispute Resolution Conference should be sent by email to:
        info@theopenlane.io, or by regular mail to 5150 Broadway St., San
        Antonio, Texas 78209. The Notice must include: (1) your name, telephone
        number, mailing address, e‐mail address associated with your account (if
        you have one); (2) the name, telephone number, mailing address and
        e‐mail address of your counsel, if any; and (3) a description of your
        Dispute.
      </p>
      <p className="mb-6 text-sm">
        The Informal Dispute Resolution Conference shall be individualized such
        that a separate conference must be held each time either party initiates
        a Dispute, even if the same law firm or group of law firms represents
        multiple users in similar cases, unless all parties agree; multiple
        individuals initiating a Dispute cannot participate in the same Informal
        Dispute Resolution Conference unless all parties agree. In the time
        between a party receiving the Notice and the Informal Dispute Resolution
        Conference, nothing in this Arbitration Agreement shall prohibit the
        parties from engaging in informal communications to resolve the
        initiating party’s Dispute. Engaging in the Informal Dispute Resolution
        Conference is a condition precedent and requirement that must be
        fulfilled before commencing arbitration. The statute of limitations and
        any filing fee deadlines shall be tolled while the parties engage in the
        Informal Dispute Resolution Conference process required by this section.
      </p>
      <p className="mb-6 text-sm">
        Arbitration Rules and Forum. These Terms evidence a transaction
        involving interstate commerce; and notwithstanding any other provision
        herein with respect to the applicable substantive law, the Federal
        Arbitration Act, 9 U.S.C. § 1 et seq., will govern the interpretation
        and enforcement of this Arbitration Agreement and any arbitration
        proceedings. If the Informal Dispute Resolution Process described above
        does not resolve satisfactorily within 60 days after receipt of your
        Notice, you and Company agree that either party shall have the right to
        finally resolve the Dispute through binding arbitration. The Federal
        Arbitration Act governs the interpretation and enforcement of this
        Arbitration Agreement. The arbitration will be conducted by JAMS, an
        established alternative dispute resolution provider. Disputes involving
        claims and counterclaims with an amount in controversy under $250,000,
        not inclusive of attorneys’ fees and interest, shall be subject to JAMS’
        most current version of the Streamlined Arbitration Rules and procedures
        available at http://www.jamsadr.com/rules-streamlined-arbitration/; all
        other claims shall be subject to JAMS’s most current version of the
        Comprehensive Arbitration Rules and Procedures, available at
        http://www.jamsadr.com/rules-comprehensive-arbitration/. JAMS’s rules
        are also available at www.jamsadr.com or by calling JAMS at
        800-352-5267. A party who wishes to initiate arbitration must provide
        the other party with a request for arbitration (the “Request”). The
        Request must include: (1) the name, telephone number, mailing address,
        e‐mail address of the party seeking arbitration and the account username
        (if applicable) as well as the email address associated with any
        applicable account; (2) a statement of the legal claims being asserted
        and the factual bases of those claims; (3) a description of the remedy
        sought and an accurate, good‐faith calculation of the amount in
        controversy in United States Dollars; (4) a statement certifying
        completion of the Informal Dispute Resolution process as described
        above; and (5) evidence that the requesting party has paid any necessary
        filing fees in connection with such arbitration.
      </p>
      <p className="mb-6 text-sm">
        If the party requesting arbitration is represented by counsel, the
        Request shall also include counsel’s name, telephone number, mailing
        address, and email address. Such counsel must also sign the Request. By
        signing the Request, counsel certifies to the best of counsel’s
        knowledge, information, and belief, formed after an inquiry reasonable
        under the circumstances, that: (1) the Request is not being presented
        for any improper purpose, such as to harass, cause unnecessary delay, or
        needlessly increase the cost of dispute resolution; (2) the claims,
        defenses and other legal contentions are warranted by existing law or by
        a nonfrivolous argument for extending, modifying, or reversing existing
        law or for establishing new law; and (3) the factual and damages
        contentions have evidentiary support or, if specifically so identified,
        will likely have evidentiary support after a reasonable opportunity for
        further investigation or discovery.
      </p>
      <p className="mb-6 text-sm">
        Unless you and Company otherwise agree, or the Batch Arbitration process
        discussed in Subsection 8.2(h) is triggered, the arbitration will be
        conducted in the county where you reside. Subject to the JAMS Rules, the
        arbitrator may direct a limited and reasonable exchange of information
        between the parties, consistent with the expedited nature of the
        arbitration. If the JAMS is not available to arbitrate, the parties will
        select an alternative arbitral forum. Your responsibility to pay any
        JAMS fees and costs will be solely as set forth in the applicable JAMS
        Rules.
      </p>
      <p className="mb-6 text-sm">
        You and Company agree that all materials and documents exchanged during
        the arbitration proceedings shall be kept confidential and shall not be
        shared with anyone except the parties’ attorneys, accountants, or
        business advisors, and then subject to the condition that they agree to
        keep all materials and documents exchanged during the arbitration
        proceedings confidential.
      </p>
      <p className="mb-6 text-sm">
        Authority of Arbitrator. The arbitrator shall have exclusive authority
        to resolve all disputes subject to arbitration hereunder including,
        without limitation, any dispute related to the interpretation,
        applicability, enforceability or formation of this Arbitration Agreement
        or any portion of the Arbitration Agreement, except for the following:
        (1) all Disputes arising out of or relating to the subsection entitled
        “Waiver of Class or Other Non-Individualized Relief,” including any
        claim that all or part of the subsection entitled “Waiver of Class or
        Other Non-Individualized Relief” is unenforceable, illegal, void or
        voidable, or that such subsection entitled “Waiver of Class or Other
        Non-Individualized Relief” has been breached, shall be decided by a
        court of competent jurisdiction and not by an arbitrator; (2) except as
        expressly contemplated in the subsection entitled “Batch Arbitration,”
        all Disputes about the payment of arbitration fees shall be decided only
        by a court of competent jurisdiction and not by an arbitrator; (3) all
        Disputes about whether either party has satisfied any condition
        precedent to arbitration shall be decided only by a court of competent
        jurisdiction and not by an arbitrator; and (4) all Disputes about which
        version of the Arbitration Agreement applies shall be decided only by a
        court of competent jurisdiction and not by an arbitrator. The
        arbitration proceeding will not be consolidated with any other matters
        or joined with any other cases or parties, except as expressly provided
        in the subsection entitled “Batch Arbitration.” The arbitrator shall
        have the authority to grant motions dispositive of all or part of any
        claim or dispute. The arbitrator shall have the authority to award
        monetary damages and to grant any non-monetary remedy or relief
        available to an individual party under applicable law, the arbitral
        forum’s rules, and these Terms (including the Arbitration Agreement).
        The arbitrator shall issue a written award and statement of decision
        describing the essential findings and conclusions on which any award (or
        decision not to render an award) is based, including the calculation of
        any damages awarded. The arbitrator shall follow the applicable law. The
        award of the arbitrator is final and binding upon you and us. Judgment
        on the arbitration award may be entered in any court having
        jurisdiction.
      </p>
      <p className="mb-6 text-sm">
        Waiver of Jury Trial. EXCEPT AS SPECIFIED in section 8.2(a) YOU AND THE
        COMPANY PARTIES HEREBY WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO
        SUE IN COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY. You and the
        Company Parties are instead electing that all covered claims and
        disputes shall be resolved exclusively by arbitration under this
        Arbitration Agreement, except as specified in Section 8.2(a) above. An
        arbitrator can award on an individual basis the same damages and relief
        as a court and must follow these Terms as a court would. However, there
        is no judge or jury in arbitration, and court review of an arbitration
        award is subject to very limited review.
      </p>
      <p className="mb-6 text-sm">
        Waiver of Class or Other Non-Individualized Relief. YOU AND COMPANY
        AGREE THAT, EXCEPT AS SPECIFIED IN SUBSECTION 8.2(h) EACH OF US MAY
        BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT ON A
        CLASS, REPRESENTATIVE, OR COLLECTIVE BASIS, AND THE PARTIES HEREBY WAIVE
        ALL RIGHTS TO HAVE ANY DISPUTE BE BROUGHT, HEARD, ADMINISTERED,
        RESOLVED, OR ARBITRATED ON A CLASS, COLLECTIVE, REPRESENTATIVE, OR MASS
        ACTION BASIS. ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND DISPUTES OF MORE
        THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR CONSOLIDATED WITH
        THOSE OF ANY OTHER CUSTOMER OR USER. Subject to this Arbitration
        Agreement, the arbitrator may award declaratory or injunctive relief
        only in favor of the individual party seeking relief and only to the
        extent necessary to provide relief warranted by the party’s individual
        claim. Nothing in this paragraph is intended to, nor shall it, affect
        the terms and conditions under the Subsection 8.2(h) entitled “Batch
        Arbitration.” Notwithstanding anything to the contrary in this
        Arbitration Agreement, if a court decides by means of a final decision,
        not subject to any further appeal or recourse, that the limitations of
        this subsection, “Waiver of Class or Other Non-Individualized Relief,”
        are invalid or unenforceable as to a particular claim or request for
        relief (such as a request for public injunctive relief), you and Company
        agree that that particular claim or request for relief (and only that
        particular claim or request for relief) shall be severed from the
        arbitration and may be litigated in the state or federal courts located
        in the State of Texas. All other Disputes shall be arbitrated or
        litigated in small claims court. This subsection does not prevent you or
        Company from participating in a class-wide settlement of claims.
      </p>
      <p className="mb-6 text-sm">
        Attorneys’ Fees and Costs. The parties shall bear their own attorneys’
        fees and costs in arbitration unless the arbitrator finds that either
        the substance of the Dispute or the relief sought in the Request was
        frivolous or was brought for an improper purpose (as measured by the
        standards set forth in Federal Rule of Civil Procedure 11(b)). If you or
        Company need to invoke the authority of a court of competent
        jurisdiction to compel arbitration, then the party that obtains an order
        compelling arbitration in such action shall have the right to collect
        from the other party its reasonable costs, necessary disbursements, and
        reasonable attorneys’ fees incurred in securing an order compelling
        arbitration. The prevailing party in any court action relating to
        whether either party has satisfied any condition precedent to
        arbitration, including the Informal Dispute Resolution Process, is
        entitled to recover their reasonable costs, necessary disbursements, and
        reasonable attorneys’ fees and costs.
      </p>
      <p className="mb-6 text-sm">
        Batch Arbitration. To increase the efficiency of administration and
        resolution of arbitrations, you and Company agree that in the event that
        there are 100 or more individual Requests of a substantially similar
        nature filed against Company by or with the assistance of the same law
        firm, group of law firms, or organizations, within a 30 day period (or
        as soon as possible thereafter), the JAMS shall (1) administer the
        arbitration demands in batches of 100 Requests per batch (plus, to the
        extent there are less than 100 Requests left over after the batching
        described above, a final batch consisting of the remaining Requests);
        (2) appoint one arbitrator for each batch; and (3) provide for the
        resolution of each batch as a single consolidated arbitration with one
        set of filing and administrative fees due per side per batch, one
        procedural calendar, one hearing (if any) in a place to be determined by
        the arbitrator, and one final award (“Batch Arbitration”).
      </p>
      <p className="mb-6 text-sm">
        All parties agree that Requests are of a “substantially similar nature”
        if they arise out of or relate to the same event or factual scenario and
        raise the same or similar legal issues and seek the same or similar
        relief. To the extent the parties disagree on the application of the
        Batch Arbitration process, the disagreeing party shall advise the JAMS,
        and the JAMS shall appoint a sole standing arbitrator to determine the
        applicability of the Batch Arbitration process (“Administrative
        Arbitrator”). In an effort to expedite resolution of any such dispute by
        the Administrative Arbitrator, the parties agree the Administrative
        Arbitrator may set forth such procedures as are necessary to resolve any
        disputes promptly. The Administrative Arbitrator’s fees shall be paid by
        Company.
      </p>
      <p className="mb-6 text-sm">
        You and Company agree to cooperate in good faith with the JAMS to
        implement the Batch Arbitration process including the payment of single
        filing and administrative fees for batches of Requests, as well as any
        steps to minimize the time and costs of arbitration, which may include:
        (1) the appointment of a discovery special master to assist the
        arbitrator in the resolution of discovery disputes; and (2) the adoption
        of an expedited calendar of the arbitration proceedings.
      </p>
      <p className="mb-6 text-sm">
        This Batch Arbitration provision shall in no way be interpreted as
        authorizing a class, collective and/or mass arbitration or action of any
        kind, or arbitration involving joint or consolidated claims under any
        circumstances, except as expressly set forth in this provision.
      </p>
      <p className="mb-6 text-sm">
        30-Day Right to Opt Out. You have the right to opt out of the provisions
        of this Arbitration Agreement by sending a timely written notice of your
        decision to opt out to the following address: 5150 Broadway St., San
        Antonio, Texas 78209, or email to info@theopenlane.io, within 30 days
        after first becoming subject to this Arbitration Agreement. Your notice
        must include your name and address and a clear statement that you want
        to opt out of this Arbitration Agreement. If you opt out of this
        Arbitration Agreement, all other parts of these Terms will continue to
        apply to you. Opting out of this Arbitration Agreement has no effect on
        any other arbitration agreements that you may currently have with us, or
        may enter into in the future with us.
      </p>
      <p className="mb-6 text-sm">
        Invalidity, Expiration. Except as provided in the subsection entitled
        “Waiver of Class or Other Non-Individualized Relief”, if any part or
        parts of this Arbitration Agreement are found under the law to be
        invalid or unenforceable, then such specific part or parts shall be of
        no force and effect and shall be severed and the remainder of the
        Arbitration Agreement shall continue in full force and effect. You
        further agree that any Dispute that you have with Company as detailed in
        this Arbitration Agreement must be initiated via arbitration within the
        applicable statute of limitation for that claim or controversy, or it
        will be forever time barred. Likewise, you agree that all applicable
        statutes of limitation will apply to such arbitration in the same manner
        as those statutes of limitation would apply in the applicable court of
        competent jurisdiction.
      </p>
      <p className="mb-6 text-sm">
        Modification. Notwithstanding any provision in these Terms to the
        contrary, we agree that if Company makes any future material change to
        this Arbitration Agreement, you may reject that change within 30 days of
        such change becoming effective by writing Company at the following
        address: 5150 Broadway St., San Antonio, Texas 78209, or email to
        info@theopenlane.io. Unless you reject the change within 30 days of such
        change becoming effective by writing to Company in accordance with the
        foregoing, your continued use of the Site and/or Services, including the
        acceptance of products and services offered on the Site following the
        posting of changes to this Arbitration Agreement constitutes your
        acceptance of any such changes. Changes to this Arbitration Agreement do
        not provide you with a new opportunity to opt out of the Arbitration
        Agreement if you have previously agreed to a version of these Terms and
        did not validly opt out of arbitration. If you reject any change or
        update to this Arbitration Agreement, and you were bound by an existing
        agreement to arbitrate Disputes arising out of or relating in any way to
        your access to or use of the Services or of the Site, any communications
        you receive, any products sold or distributed through the Site, the
        Services, or these Terms, the provisions of this Arbitration Agreement
        as of the date you first accepted these Terms (or accepted any
        subsequent changes to these Terms) remain in full force and effect.
        Company will continue to honor any valid opt outs of the Arbitration
        Agreement that you made to a prior version of these Terms.
      </p>
      <p className="mb-6 text-sm">
        Export. The Site may be subject to U.S. export control laws and may be
        subject to export or import regulations in other countries. You agree
        not to export, reexport, or transfer, directly or indirectly, any U.S.
        technical data acquired from Company, or any products utilizing such
        data, in violation of the United States export laws or regulations.
      </p>
      <p className="mb-6 text-sm">
        Disclosures. Company is located at the address in Section 8.8. If you
        are a California resident, you may report complaints to the Complaint
        Assistance Unit of the Division of Consumer Product of the California
        Department of Consumer Affairs by contacting them in writing at 400 R
        Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.
      </p>
      <p className="mb-6 text-sm">
        Electronic Communications. The communications between you and Company
        use electronic means, whether you use the Site or send us emails, or
        whether Company posts notices on the Site or communicates with you via
        email. For contractual purposes, you (a) consent to receive
        communications from Company in an electronic form; and (b) agree that
        all terms and conditions, agreements, notices, disclosures, and other
        communications that Company provides to you electronically satisfy any
        legal requirement that such communications would satisfy if it were be
        in a hardcopy writing. The foregoing does not affect your non-waivable
        rights.
      </p>
      <p className="mb-6 text-sm">
        Entire Terms. These Terms constitute the entire agreement between you
        and us regarding the use of the Site. Our failure to exercise or enforce
        any right or provision of these Terms shall not operate as a waiver of
        such right or provision. The section titles in these Terms are for
        convenience only and have no legal or contractual effect. The word
        “including” means “including without limitation”. If any provision of
        these Terms is, for any reason, held to be invalid or unenforceable, the
        other provisions of these Terms will be unimpaired and the invalid or
        unenforceable provision will be deemed modified so that it is valid and
        enforceable to the maximum extent permitted by law. Your relationship to
        Company is that of an independent contractor, and neither party is an
        agent or partner of the other. These Terms, and your rights and
        obligations herein, may not be assigned, subcontracted, delegated, or
        otherwise transferred by you without Company’s prior written consent,
        and any attempted assignment, subcontract, delegation, or transfer in
        violation of the foregoing will be null and void. Company may freely
        assign these Terms. The terms and conditions set forth in these Terms
        shall be binding upon assignees.
      </p>
      <p className="mb-6 text-sm">
        Copyright/Trademark Information. Copyright © 2024 theopenlane, Inc. All
        rights reserved. All trademarks, logos and service marks (“Marks”)
        displayed on the Site are our property or the property of other third
        parties. You are not permitted to use these Marks without our prior
        written consent or the consent of such third party which may own the
        Marks.
      </p>
      <p className="mb-6 text-sm">Contact Information</p>
      <p className="mb-6 text-sm">info@theopenlane.io</p>
      <p className="mb-6 text-sm">Address:</p>
      <p className="mb-6 text-sm">5150 Broadway St.</p>
      <p className="mb-6 text-sm">San Antonio, Texas 78209</p>
      <p className="mb-6 text-sm">Telephone: 7207386846</p>
      <p className="mb-6 text-sm">Email: info@theopenlane.io</p>
    </>
  ),
  Subprocessors: (
    <>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Cloudflare, Inc. (USA): Web application firewall
        </p>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Salesforce, Inc. (USA): Team communication (Slack)
        </p>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Stripe, Inc. (USA): Payment processing
        </p>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Vercel Inc. (USA): Website hosting
        </p>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Webflow, Inc. (USA): Website hosting
        </p>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Google LLC (USA): Infrastructure provider
        </p>
      </div>
      <div className="flex items-start gap-2 mb-3">
        <CircleCheckBig class="text-color-primary w-[20px] h-[20px] mt-1 shrink-0" />
        <p className="font-normal text-lg leading-7">
          Plus Five Five, Inc. (USA): Resend, email provider
        </p>
      </div>
    </>
  ),
  "Privacy Policy": (
    <>
      <p className="mb-2 text-xl font-semibold">Welcome to theopenlane, Inc.</p>

      <p className="mb-6 text-sm">
        theopenlane, Inc. (“us”, “we”, or “our”) operates https://theopenlane.io
        (hereinafter referred to as “Service”).
      </p>

      <p className="mb-6 text-sm">
        Our Privacy Policy governs your visit to https://theopenlane.io, and
        explains how we collect, safeguard and disclose information that results
        from your use of our Service.{" "}
      </p>

      <p className="mb-6 text-sm">
        We use your data to provide and improve Service. By using Service, you
        agree to the collection and use of information in accordance with this
        policy. Unless otherwise defined in this Privacy Policy, the terms used
        in this Privacy Policy have the same meanings as in our Terms and
        Conditions.{" "}
      </p>

      <p className="mb-6 text-sm">
        Our Terms and Conditions (“Terms”) govern all use of our Service and
        together with the Privacy Policy constitutes your agreement with us
        (“agreement”).{" "}
      </p>

      <p className="text-xl font-semibold mb-2">Definitions: </p>

      <p className="mb-6 text-sm">
        SERVICE means the https://theopenlane.io website operated by
        theopenlane, Inc.{" "}
      </p>

      <p className="mb-6 text-sm">
        PERSONAL DATA means data about a living individual who can be identified
        from those data (or from those and other information either in our
        possession or likely to come into our possession).{" "}
      </p>

      <p className="mb-6 text-sm">
        USAGE DATA is data collected automatically either generated by the use
        of Service or from Service infrastructure itself (for example, the
        duration of a page visit).
      </p>

      <p className="mb-6 text-sm">
        COOKIES are small files stored on your device (computer or mobile
        device).
      </p>

      <p className="mb-6 text-sm">
        DATA CONTROLLER means a natural or legal person who (either alone or
        jointly or in common with other persons) determines the purposes for
        which and the manner in which any personal data are, or are to be,
        processed. For the purpose of this Privacy Policy, we are a Data
        Controller of your data.{" "}
      </p>

      <p className="mb-6 text-sm">
        DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal person
        who processes the data on behalf of the Data Controller. We may use the
        services of various Service Providers in order to process your data more
        effectively.{" "}
      </p>

      <p className="mb-6 text-sm">
        DATA SUBJECT is any living individual who is the subject of Personal
        Data.
      </p>

      <p className="mb-6 text-sm">
        THE USER is the individual using our Service. The User corresponds to
        the Data Subject, who is the subject of Personal Data.
      </p>

      <p className="text-xl font-semibold mb-2">
        Information Collection and Use:{" "}
      </p>

      <p className="mb-6 text-sm">
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </p>
      <p className="text-xl font-semibold mb-2">Types of Data Collected: </p>

      <p className="text-lg font-semibold mb-2">Personal Data: </p>
      <p className="mb-6 text-sm">
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you (“Personal Data”). Personally identifiable information may
        include, but is not limited to:
      </p>

      <p className="mb-6 text-sm">
        Email address First name and last name Address, State, Province,
        ZIP/Postal code, City Cookies and Usage Data We may use your Personal
        Data to contact you with newsletters, marketing or promotional materials
        and other information that may be of interest to you. You may opt out of
        receiving any, or all, of these communications from us by following the
        unsubscribe link.
      </p>

      <p className="text-lg font-semibold mb-2">Usage Data: </p>
      <p className="mb-6 text-sm">
        We may also collect information that your browser sends whenever you
        visit our Service or when you access Service by or through a mobile
        device (“Usage Data”).
      </p>
      <p className="mb-6 text-sm">
        This Usage Data may include information such as your computer's Internet
        Protocol address (e.g. IP address), browser type, browser version, the
        pages of our Service that you visit, the time and date of your visit,
        the time spent on those pages, unique device identifiers and other
        diagnostic data.
      </p>
      <p className="mb-6 text-sm">
        When you access Service with a mobile device, this Usage Data may
        include information such as the type of mobile device you use, your
        mobile device unique ID, the IP address of your mobile device, your
        mobile operating system, the type of mobile Internet browser you use,
        unique device identifiers and other diagnostic data.
      </p>

      <p className="text-lg font-semibold mb-2">Use of Data: </p>
      <p className="mb-6 text-sm">
        theopenlane, Inc. uses the collected data for various purposes:
      </p>
      <p className="mb-6 text-sm">
        to notify you about changes to our Service;
      </p>
      <p className="mb-6 text-sm">
        to allow you to participate in interactive features of our Service when
        you choose to do so;
      </p>
      <p className="mb-6 text-sm">to provide customer support;</p>
      <p className="mb-6 text-sm">
        to gather analysis or valuable information so that we can improve our
        Service;
      </p>
      <p className="mb-6 text-sm">to monitor the usage of our Service;</p>
      <p className="mb-6 text-sm">
        to detect, prevent and address technical issues;
      </p>
      <p className="mb-6 text-sm">
        to fulfill any other purpose for which you provide it;
      </p>
      <p className="mb-6 text-sm">
        to carry out our obligations and enforce our rights arising from any
        contracts entered into between you and us, including for billing and
        collection;
      </p>
      <p className="mb-6 text-sm">
        to provide you with notices about your account and/or subscription,
        including expiration and renewal notices, email-instructions, etc.;
      </p>
      <p className="mb-6 text-sm">
        to provide you with news, special offers and general information about
        other goods, services and events which we offer that are similar to
        those that you have already purchased or enquired about unless you have
        opted not to receive such information;
      </p>
      <p className="mb-6 text-sm">
        in any other way we may describe when you provide the information;
      </p>
      <p className="mb-6 text-sm">for any other purpose with your consent.</p>
      <p className="mb-6 text-sm">to monitor the usage of our Service;</p>

      <p className="text-lg font-semibold mb-2">Retention of Data: </p>

      <p className="mb-6 text-sm">
        We will retain your Personal Data only for as long as is necessary for
        the purposes set out in this Privacy Policy. We will retain and use your
        Personal Data to the extent necessary to comply with our legal
        obligations (for example, if we are required to retain your data to
        comply with applicable laws), resolve disputes, and enforce our legal
        agreements and policies.
      </p>

      <p className="mb-6 text-sm">
        We will also retain Usage Data for internal analysis purposes. Usage
        Data is generally retained for a shorter period, except when this data
        is used to strengthen the security or to improve the functionality of
        our Service, or we are legally obligated to retain this data for longer
        time periods.
      </p>

      <p className="text-lg font-semibold mb-2">Transfer of Data: </p>
      <p className="mb-6 text-sm">
        Your information, including Personal Data, may be transferred to – and
        maintained on – computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ from those of your jurisdiction.
      </p>

      <p className="mb-6 text-sm">
        If you are located outside United States and choose to provide
        information to us, please note that we transfer the data, including
        Personal Data, to United States and process it there.
      </p>
      <p className="mb-6 text-sm">
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.
      </p>
      <p className="mb-6 text-sm">
        theopenlane, Inc. will take all the steps reasonably necessary to ensure
        that your data is treated securely and in accordance with this Privacy
        Policy and no transfer of your Personal Data will take place to an
        organization or a country unless there are adequate controls in place
        including the security of your data and other personal information.
      </p>
      <p className="text-lg font-semibold mb-2">Disclosure of Data: </p>

      <p className="mb-6 text-sm">
        We may disclose personal information that we collect, or you provide:
      </p>
      <p className="mb-6 text-sm">Disclosure for Law Enforcement.</p>
      <p className="mb-6 text-sm">
        Under certain circumstances, we may be required to disclose your
        Personal Data if required to do so by law or in response to valid
        requests by public authorities.
      </p>
      <p className="mb-6 text-sm">
        Other cases. We may disclose your information also:
      </p>
      <p className="mb-6 text-sm">
        to contractors, service providers, and other third parties we use to
        support our business;
      </p>

      <p className="mb-6 text-sm">with your consent in any other cases;</p>
      <p className="text-lg font-semibold mb-2">Security of Data: </p>

      <p className="mb-6 text-sm">
        The security of your data is important to us but remember that no method
        of transmission over the Internet or method of electronic storage is
        100% secure. While we strive to use commercially acceptable means to
        protect your Personal Data, we cannot guarantee its absolute security.
      </p>

      <p className="text-lg font-semibold mb-2">
        Your Data Protection Rights Under General Data Protection Regulation
        (GDPR):{" "}
      </p>

      <p className="mb-6 text-sm">
        If you are a resident of the European Union (EU) and European Economic
        Area (EEA), you have certain data protection rights, covered by GDPR. –
        See more at: https://eur-lex.europa.eu/eli/reg/2016/679/oj
      </p>
      <p className="mb-6 text-sm">
        We aim to take reasonable steps to allow you to correct, amend, delete,
        or limit the use of your Personal Data.
      </p>
      <p className="mb-6 text-sm">
        If you wish to be informed what Personal Data we hold about you and if
        you want it to be removed from our systems, please email us at
        support@theopenlane.io.
      </p>
      <p className="mb-6 text-sm">
        In certain circumstances, you have the following data protection rights:
      </p>
      <p className="mb-6 text-sm">
        the right to access, update or to delete the information we have on you;
      </p>
      <p className="mb-6 text-sm">
        the right of rectification. You have the right to have your information
        rectified if that information is inaccurate or incomplete;
      </p>

      <p className="mb-6 text-sm">
        the right to object. You have the right to object to our processing of
        your Personal Data;
      </p>
      <p className="mb-6 text-sm">
        the right of restriction. You have the right to request that we restrict
        the processing of your personal information;
      </p>

      <p className="mb-6 text-sm">
        the right to data portability. You have the right to be provided with a
        copy of your Personal Data in a structured, machine-readable and
        commonly used format;
      </p>
      <p className="mb-6 text-sm">
        the right to withdraw consent. You also have the right to withdraw your
        consent at any time where we rely on your consent to process your
        personal information;
      </p>
      <p className="mb-6 text-sm">
        Please note that we may ask you to verify your identity before
        responding to such requests. Please note, we may not able to provide
        Service without some necessary data.
      </p>
      <p className="mb-6 text-sm">
        You have the right to complain to a Data Protection Authority about our
        collection and use of your Personal Data. For more information, please
        contact your local data protection authority in the European Economic
        Area (EEA).
      </p>

      <p className="text-lg font-semibold mb-2">
        Your Data Protection Rights under the California Privacy Protection Act
        (CalOPPA)
      </p>

      <p className="mb-6 text-sm">
        CalOPPA is the first state law in the nation to require commercial
        websites and online services to post a privacy policy. The law’s reach
        stretches well beyond California to require a person or company in the
        United States (and conceivable the world) that operates websites
        collecting personally identifiable information from California consumers
        to post a conspicuous privacy policy on its website stating exactly the
        information being collected and those individuals with whom it is being
        shared, and to comply with this policy. – See more at:
        https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
      </p>

      <p className="mb-6 text-sm">
        According to CalOPPA we agree to the following:
      </p>
      <p className="mb-6 text-sm">users can visit our site anonymously;</p>
      <p className="mb-6 text-sm">
        our Privacy Policy link includes the word “Privacy”, and can easily be
        found on the page specified above on the home page of our website;
      </p>
      <p className="mb-6 text-sm">
        users will be notified of any privacy policy changes on our Privacy
        Policy Page;
      </p>
      <p className="mb-6 text-sm">
        users are able to change their personal information by emailing us at
        support@theopenlane.io.
      </p>
      <p className="mb-6 text-sm">Our Policy on “Do Not Track” Signals:</p>
      <p className="mb-6 text-sm">
        We honor Do Not Track signals and do not track, plant cookies, or use
        advertising when a Do Not Track browser mechanism is in place. Do Not
        Track is a preference you can set in your web browser to inform websites
        that you do not want to be tracked.
      </p>
      <p className="mb-6 text-sm">
        You can enable or disable Do Not Track by visiting the Preferences or
        Settings page of your web browser.
      </p>
      <p className="text-lg font-semibold mb-2">
        Your Data Protection Rights under the California Consumer Privacy Act
        (CCPA){" "}
      </p>
      <p className="mb-6 text-sm">
        If you are a California resident, you are entitled to learn what data we
        collect about you, ask to delete your data and not to sell (share) it.
        To exercise your data protection rights, you can make certain requests
        and ask us:
      </p>
      <p className="mb-6 text-sm">
        a) What personal information we have about you.
      </p>
      <p className="mb-6 text-sm">
        If you make this request, we will return to you
      </p>
      <p className="mb-6 text-sm">
        The categories of personal information we have collected about you.
      </p>
      <p className="mb-6 text-sm">
        The categories of sources from which we collect your personal
        information.
      </p>
      <p className="mb-6 text-sm">
        The business or commercial purpose for collecting or selling your
        personal information.
      </p>
      <p className="mb-6 text-sm">
        The categories of third parties with whom we share personal information.
      </p>
      <p className="mb-6 text-sm">
        The specific pieces of personal information we have collected about you.
      </p>

      <p className="mb-6 text-sm">
        A list of categories of personal information that we have sold, along
        with the category of any other company we sold it to. If we have not
        sold your personal information, we will inform you of that fact.
      </p>
      <p className="mb-6 text-sm">
        A list of categories of personal information that we have disclosed for
        a business purpose, along with the category of any other company we
        shared it with.
      </p>
      <p className="mb-6 text-sm">
        Please note, you are entitled to ask us to provide you with this
        information up to two times in a rolling twelve-month period. When you
        make this request, the information provided may be limited to the
        personal information we collected about you in the previous 12 months.
      </p>
      <p className="mb-6 text-sm">b) To delete your personal information.</p>
      <p className="mb-6 text-sm">
        If you make this request, we will delete the personal information we
        hold about you as of the date of your request from our records and
        direct any service providers to do the same. In some cases, deletion may
        be accomplished through de-identification of the information. If you
        choose to delete your personal information, you may not be able to use
        certain functions that require your personal information to operate.
      </p>
      <p className="mb-6 text-sm">
        c) To stop selling your personal information
      </p>
      <p className="mb-6 text-sm">
        We don't sell or rent your personal information to any third parties for
        any purpose. You are the only owner of your Personal Data and can
        request disclosure or deletion at any time.
      </p>
      <p className="mb-6 text-sm">
        Please note, if you ask us to delete or stop selling your data, it may
        impact your experience with us, and you may not be able to participate
        in certain programs or membership services which require the usage of
        your personal information to function. But in no circumstances, we will
        discriminate against you for exercising your rights.
      </p>
      <p className="mb-6 text-sm">
        To exercise your California data protection rights described above,
        please send your request(s) by one of the following means:
      </p>
      <p className="mb-6 text-sm">By email: support@theopenlane.io</p>
      <p className="mb-6 text-sm">
        Your data protection rights, described above, are covered by the CCPA,
        short for the California Consumer Privacy Act. To find out more, visit
        the official California Legislative Information website. The CCPA took
        effect on 01/01/2020.
      </p>

      <p className="text-lg font-semibold mb-2">Service Providers</p>

      <p className="mb-6 text-sm">
        We may employ third party companies and individuals to facilitate our
        Service (“Service Providers”), provide Service on our behalf, perform
        Service-related services or assist us in analysing how our Service is
        used.
      </p>
      <p className="mb-6 text-sm">
        These third parties have access to your Personal Data only to perform
        these tasks on our behalf and are obligated not to disclose or use it
        for any other purpose.
      </p>
      <p className="text-lg font-semibold mb-2">CI/CD tools</p>
      <p className="mb-6 text-sm">
        We may use third-party Service Providers to automate the development
        process of our Service.
      </p>
      <p className="mb-6 text-sm">Buildkite</p>
      <p className="mb-6 text-sm">
        Buildkite is Continuous Integration, a development practice which is
        being used by software teams allowing them to build, test and deploy
        applications easier and quicker on multiple platforms.
      </p>
      <p className="mb-6 text-sm">
        For more information on what data Buildkite collects for what purpose
        and how the protection of the data is ensured, please visit Buildkite
        Privacy Policy page: https://buildkite.com/privacy-policy.
      </p>
      <p className="text-lg font-semibold mb-2">Payments</p>
      <p className="mb-6 text-sm">
        We may provide paid products and/or services within Service. In that
        case, we use third-party services for payment processing (e.g. payment
        processors).
      </p>
      <p className="mb-6 text-sm">
        We will not store or collect your payment card details. That information
        is provided directly to our third-party payment processors whose use of
        your personal information is governed by their Privacy Policy. These
        payment processors adhere to the standards set by PCI-DSS as managed by
        the PCI Security Standards Council, which is a joint effort of brands
        like Visa, Mastercard, American Express and Discover. PCI-DSS
        requirements help ensure the secure handling of payment information.
      </p>
      <p className="mb-6 text-sm">The payment processors we work with are:</p>
      <p className="mb-6 text-sm">Stripe</p>
      <p className="mb-6 text-sm">
        Their Privacy Policy can be viewed at: https://stripe.com/us/privacy
      </p>
      <p className="text-lg font-semibold mb-2">Links to Other Sites</p>
      <p className="mb-6 text-sm">
        Our Service may contain links to other sites that are not operated by
        us. If you click a third party link, you will be directed to that third
        party's site. We strongly advise you to review the Privacy Policy of
        every site you visit.
      </p>
      <p className="mb-6 text-sm">
        We have no control over and assume no responsibility for the content,
        privacy policies or practices of any third party sites or services.
      </p>
      <p className="text-lg font-semibold mb-2">Children's Privacy</p>
      <p className="mb-6 text-sm">
        Our Services are not intended for use by children under the age of 18
        (“Child” or “Children”).
      </p>
      <p className="mb-6 text-sm">
        We do not knowingly collect personally identifiable information from
        Children under 18. If you become aware that a Child has provided us with
        Personal Data, please contact us. If we become aware that we have
        collected Personal Data from Children without verification of parental
        consent, we take steps to remove that information from our servers.
      </p>
      <p className="text-lg font-semibold mb-2">
        Changes to This Privacy Policy
      </p>
      <p className="mb-6 text-sm">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
      <p className="mb-6 text-sm">
        We will let you know via email and/or a prominent notice on our Service,
        prior to the change becoming effective and update “effective date” at
        the top of this Privacy Policy.
      </p>
      <p className="mb-6 text-sm">
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </p>

      <p className="text-lg font-semibold mb-2">Contact Us</p>
      <p className="mb-6 text-sm">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <p className="mb-6 text-sm">By email: support@theopenlane.io.</p>
    </>
  ),
};

const LegalTabs = () => {
  const [activeTab, setActiveTab] = useState("Privacy Policy");

  useEffect(() => {
    const hash = window.location.hash.toLowerCase();
    if (hashToTabMap[hash]) {
      setActiveTab(hashToTabMap[hash]);
    }
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] max-w-[1290px] mx-auto">
      <aside className="p-4">
        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 leading-[100%] font-normal cursor-pointer ${
                activeTab === tab ? "active-tab-bg" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>
      <main className="p-6">
        <p className="text-6xl font-normal leading-[100%] tracking-[-1.5px] mb-4">
          {activeTab === "DPA" ? "Data Processing Addendum" : activeTab}
        </p>
        <div className="text-color font-normal leading-6 max-h-[800px] overflow-auto pr-2 scrollbar-custom">
          {content[activeTab]}
        </div>
      </main>
    </div>
  );
};

export default LegalTabs;
