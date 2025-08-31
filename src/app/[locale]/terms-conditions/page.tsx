import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const siteName = process.env.SITE_NAME || "58Solutions";

  const titles = {
    en: "Terms and Conditions - Legal Terms | Unit05",
    de: "Allgemeine Geschäftsbedingungen - Rechtliche Bedingungen | Unit05"
  };

  const descriptions = {
    en: "Terms and conditions for Unit05 GmbH. Legal terms governing our IT consulting and software development services.",
    de: "Allgemeine Geschäftsbedingungen für Unit05 GmbH. Rechtliche Bedingungen für unsere IT-Beratung und Softwareentwicklungsdienstleistungen."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function TermsConditionsPage() {
  return (
    <div className="pt-24 md:pt-28 lg:pt-32">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="mb-6 font-heading text-4xl font-bold text-dark sm:text-5xl dark:text-white">
                Terms and Conditions
              </h1>
              <p className="text-lg text-dark-text">
                General terms and conditions for IT and consulting services
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="rounded-sm bg-white p-8 shadow-sm dark:bg-[#1D232D] lg:p-12">
                <div className="mb-8">
                  <p className="text-base text-dark-text leading-relaxed">
                    We, the <strong className="text-dark dark:text-white">58agents GmbH</strong> (hereinafter &quot;58agents&quot; or &quot;we&quot;) are pleased to welcome you to our website. 58agents is a consulting and IT services provider company. These general terms and conditions are the exclusive contractual basis for all IT and consulting services offered and provided by 58agents.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Contents
                  </h2>
                  <ol className="space-y-2 text-base text-dark-text">
                    <li>1. General Information and Scope</li>
                    <li>2. Conclusion and Implementation of the Contract</li>
                    <li>3. Payment</li>
                    <li>4. External and Incidental Costs</li>
                    <li>5. Terms of Payment</li>
                    <li>6. Performance Delays and Force Majeure</li>
                    <li>7. Scope Changes</li>
                    <li>8. Cancellation by the Customer and Failure Regulation</li>
                    <li>9. Obligations of the Customer to Participate</li>
                    <li>10. Liability</li>
                    <li>11. Rights of use</li>
                    <li>12. Miscellaneous</li>
                    <li>13. Final Provisions</li>
                  </ol>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    1. General Information and Scope
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      These general terms and conditions are the exclusive contractual basis for all services and consulting (hereinafter &quot;services&quot;) offered and provided by 58agents. Deviating provisions of the client shall not apply, even if these are not contradicted by 58agents.
                    </p>
                    <p>
                      The General Terms and Conditions of Business also apply to all future contractual relationships, even if this is not expressly referred to in supplementary contracts. References to the validity of legal regulations have only clarifying meaning. Even without such a clarification, the statutory provisions shall therefore apply, unless they are directly amended or expressly excluded in these General Terms and Conditions.
                    </p>
                    <p>
                      For all offers of 58agents these GTC are always valid – unless the validity of these GTC is explicitly excluded in the offer. Individual agreements in the service contract always have priority over the regulations of these GTC.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    2. Conclusion and Implementation of the Contract
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      The details of the business relationship between the client and 58agents are agreed in a written contract for the service. This contract contains the description of the service, the duration and the period of the service provision, the remuneration owed, any external and ancillary costs incurred and the client&apos;s obligations to cooperate.
                    </p>
                    <p>
                      The service contract is concluded by a written offer for the provision of services to the client and a written acceptance of this offer (i.e. by email or letter). If the acceptance of the offer follows within the binding period of the offer, the service contract shall be concluded directly. Otherwise, a written order confirmation by 58agents is required.
                    </p>
                    <p>
                      58agents undertakes to provide the client with an expedient and economical solution for the project topic specified in the service contract in accordance with the principles of proper professional practice and the latest state of the art in accordance with the individual service contract. 58agents can draw the customer&apos;s attention to concerns and possibilities for improvement which arise during the implementation of the project with regard to the goal of an optimal and expedient achievement of objectives.
                    </p>
                    <p>
                      The client undertakes to support the activity of 58agents to the necessary extent. In particular, the client will ensure the timely provision of the equipment, documents and information necessary for the project implementation.
                    </p>
                    <p>
                      58agents is free regarding the way of execution of the given orders, but will consider the project requirements appropriately. 58agents is not subject to any instructions from the client. Technical and project-related instructions remain unaffected.
                    </p>
                    <p>
                      58agents will use copyrighted works of third parties, especially software, only with the appropriate authorization when performing the commissioned services.
                    </p>
                    <p>
                      58agents independently and autonomously organizes the services regulated according to the service contract and determines the type, sequence and classification of the work, in particular also the number of employees to be deployed.
                    </p>
                    <p>
                      58agents has the right to use vicarious agents for the execution of the orders. The client may reject a vicarious agent only for important reasons. An important reason is especially given if the vicarious agent does not have the necessary professional qualification.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    3. Payment
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      Remuneration is made on a fixed price basis or on a time and material basis based on the number of working days worked. Billing on a time and material basis shall be agreed if the service contract does not expressly provide for a fixed price.
                    </p>
                    <p>
                      Remuneration based on working days worked is based on eight working hours without breaks. When calculating the remuneration on the basis of hours worked, the settlement is made per quarter of an hour or part thereof.
                    </p>
                    <p>
                      All prices and fees are in Euro, plus the statutory value added tax. The prices and fees result from the valid offer.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    4. External and Incidental Costs
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      Insofar as this is not expressly excluded in the service contract, 58agents may demand compensation for all incidental costs associated with the execution of the contract in addition to the remuneration. The incidental costs include travel expenses such as travel, flight and accommodation costs as well as catering costs and other incidental travel expenses.
                    </p>
                    <p>
                      In principle, 58agents is responsible for choosing the means of transport and the place of accommodation, whereby expenses are to be reimbursed with the maximum tax limits.
                    </p>
                    <p>
                      Travel times are calculated at 50%, on weekends (i.e. Saturday & Sunday) and national holidays at 100% as working hours.
                    </p>
                    <p>
                      Services and additional costs can be invoiced separately.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    5. Terms of Payment
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      If the agreed services are rendered in parts, a corresponding partial remuneration is due.
                    </p>
                    <p>
                      All receivables are due upon receipt of the invoice. The statutory value added tax is shown separately in all invoices. The remuneration for services rendered is payable by the customer immediately after the invoice date without deduction, unless other terms of payment have been agreed. Cheques, bills of exchange and other means of payment are only accepted on account of performance and do not change the due date, whereby costs are borne by the customer.
                    </p>
                    <p>
                      The customer shall be in default if he does not pay the invoice within fourteen days of the due date. The legal regulations §§286, 288 BGB apply for default interest.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    6. Performance Delays and Force Majeure
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      58agents is not responsible for delays in performance due to force majeure and circumstances that are the responsibility of the customer and entitle 58agents to postpone the provision of the affected services for the duration of the hindrance plus a reasonable restart time. Strike, lockout and similar circumstances that make it significantly more difficult or impossible for 58agents to provide the service shall be deemed equivalent to force majeure.
                    </p>
                    <p>
                      If 58agents is in default of fulfilling its obligations, the customer may withdraw from the contract after the expiry of a reasonable grace period granted to 58agents if the agreed services have not been performed by the expiry of the grace period. Without prejudice to the liability in the event of fault, no damage caused by delay can be claimed.
                    </p>
                    <p>
                      If the expenditure increases and the cause for this is the responsibility of the customer, 58agents may also demand compensation for its additional expenditure.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    7. Scope Changes
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      The customer is entitled to request changes to the scope of services (change requests). 58agents will check whether the requested changes are feasible and reasonable. 58agents shall submit an offer for the changed services. The change request is commissioned separately by the customer.
                    </p>
                    <p>
                      The agreed service deadlines are usually extended by the calendar days (plus a reasonable restart time) on which 58agents checks the customer&apos;s change requests, prepares change offers or conducts negotiations about changes.
                    </p>
                    <p>
                      If a change request from the customer requires an extensive review, 58agents may calculate the necessary effort.
                    </p>
                    <p>
                      As long as 58agents and the customer do not agree on the implementation of the changes, 58agents shall continue to work according to the existing contract without the corresponding changes.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    8. Cancellation by the Customer and Failure Regulation
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      For cancellations received by 58agents in writing at least three calendar weeks before the start of the activity, 58agents will charge a cancellation fee of 20%.
                    </p>
                    <p>
                      Cancellations by the customer that are received by 58agents in writing later, but no later than one calendar week before the start of the activity, will incur a cancellation fee of 50% of the agreed fee.
                    </p>
                    <p>
                      Cancellation requests received later cannot be considered.
                    </p>
                    <p>
                      In addition, 58agents reserves the right to charge possible costs for planned trips to the place of assignment (if cancellation is possible, cancellation fees).
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    9. Obligations of the Customer to Participate
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      The service contract will provide for the customer&apos;s obligation to cooperate. The customer shall perform all defined obligations to cooperate at his own expense.
                    </p>
                    <p>
                      The customer appoints contact persons and deputies who are responsible for the execution of the contractual relationship and who are in expert contact with 58agents.
                    </p>
                    <p>
                      Delays for which the customer is responsible are considered change requests that may lead to higher expenses.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    10. Liability
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      58agents shall be liable for material defects and defects of title according to the statutory provisions. If only merchants are involved in the contract, §§ 377 ff. HGB shall apply additionally.
                    </p>
                    <p>
                      Outside of the liability for material defects and defects of title, 58agents shall be liable without limitation if the cause of damage is based on intent or gross negligence. 58agents shall also be liable for the slightly negligent breach of material obligations (obligations whose breach endangers the achievement of the purpose of the contract) and for the breach of cardinal obligations (obligations whose fulfilment makes the proper execution of the contract possible in the first place and on whose compliance the customer regularly relies), but in each case only for the foreseeable damage typical for the contract. 58agents is not liable for the slightly negligent breach of other obligations.
                    </p>
                    <p>
                      The limitations of liability of § 10 para.2 do not apply in the case of injury to life, body and health, for a defect after the assumption of a guarantee for the quality of the product and for fraudulently concealed defects. Liability under the Product Liability Act remains unaffected.
                    </p>
                    <p>
                      If the liability of 58agents is excluded or limited, this shall also apply to the personal liability of its employees, representatives and vicarious agents.
                    </p>
                    <p>
                      58agents shall only be liable for the loss of the customer&apos;s own data if the data has been sufficiently up-to-date and completely backed up by the customer and a reconstruction is possible with reasonable effort.
                    </p>
                    <p>
                      58agents is not responsible for the content provided by the customer. In particular, 58agents is not obliged to check the contents for possible legal violations. Should third parties assert claims against 58agents due to possible violations of law resulting from the customer&apos;s content, the customer is obligated to indemnify 58agents from any liability to third parties and to reimburse 58agents for any costs incurred due to the possible violation of law.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    11. Rights of use
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      The performance results are intellectual property of 58agents. This applies in particular to concepts and consulting contents.
                    </p>
                    <p>
                      Suggestions of the customer or other cooperation do not constitute a co-author&apos;s right.
                    </p>
                    <p>
                      These performance results may not be changed in the original or in reproduction without the consent of 58agents. Any imitation, even of parts, is not permitted.
                    </p>
                    <p>
                      58agents transfers to the customer the rights of use required for the respective purpose. The respective purpose is described in the service contract.
                    </p>
                    <p>
                      Unless otherwise agreed, the simple, non-exclusive, locally unrestricted, permanent, irrevocable and irrevocable right of use that can be exercised in any hardware and software environment shall be transferred. This allows 58agents to use it for other purposes.
                    </p>
                    <p>
                      Until full payment has been made, the customer is only permitted to use the services provided on a revocable basis. 58agents may revoke the use of such services for which the customer is in default of payment for the duration of the default.
                    </p>
                    <p>
                      Any use beyond the scope of the contract shall require the written consent of 58agents. If the use takes place without such consent, 58agents shall be entitled to demand as compensation a customary market fee for the further use.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    12. Miscellaneous
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      58agents may name the customer (on the website and in other media) as a reference customer. The customer hereby gives his consent.
                    </p>
                    <p>
                      58agents shall be entitled to have the services agreed upon in the service contract performed in whole or in part by third parties. In the event of the involvement of a third party, 58agents, as the contractual partner, guarantees the proper fulfillment of the contractual obligations to the customer. The customer shall accept the services rendered by the third party as services of 58agents. No direct contractual relationship of any kind shall arise between the third party and the customer. The contractual partners (customer and 58agents) undertake to maintain mutual loyalty.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    13. Final Provisions
                  </h2>
                  <div className="space-y-4 text-base text-dark-text leading-relaxed">
                    <p>
                      All changes and amendments to contractual agreements must be recorded in writing for verification purposes. Terminations must be made in writing.
                    </p>
                    <p>
                      Should individual provisions of the agreements be or become invalid in whole or in part, the validity of the remaining provisions shall not be affected thereby. The parties shall replace the invalid provision with a valid provision that comes as close as possible to the economic purpose of the invalid provision. The same applies to any loopholes in the agreements.
                    </p>
                    <p>
                      The law of the Federal Republic of Germany shall apply.
                    </p>
                    <p>
                      Place of performance and jurisdiction is Frankfurt am Main, Germany, if the customer is a merchant or a legal entity under public law.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-white">
                    Contact Us
                  </h2>
                  <p className="text-base text-dark-text leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us by sending us an E-Mail to{" "}
                    <a href="mailto:hey@58agents.com" className="text-primary hover:text-primary/80">
                      hey@58agents.com
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}