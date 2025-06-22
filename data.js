// data.js
const services = [
  { slug: "md5", title: "MD‑5 Medical Device License", icon: "fas fa-file-medical", img: "images/md5.jpg", short: "Licence for Class A & B manufacturing." },
  { slug: "md6", title: "MD‑6 Loan Premises License", icon: "fas fa-hammer", img: "images/md6.jpg", short: "Manufacture on third‑party premises." },
  { slug: "md9", title: "MD‑9 Medical Device License", icon: "fas fa-check-circle", img: "images/md9.jpg", short: "Manufacturing for Class C & D devices." },
  { slug: "md15", title: "MD‑15 Import License", icon: "fas fa-box-open", img: "images/md15.jpg", short: "Import & distribute devices in India." },
  { slug: "md13", title: "MD‑13 Test License", icon: "fas fa-vial", img: "images/md13.jpg", short: "Licence for device testing & evaluation." },
  { slug: "md17", title: "MD‑17 Import‑Test License", icon: "fas fa-flask", img: "images/md17.jpg", short: "Import for testing/training purposes." },
  { slug: "md42", title: "MD‑42 Wholesale License", icon: "fas fa-truck-loading", img: "images/md42.jpg", short: "Stock & distribute devices wholesale." },
  { slug: "certificates", title: "Certificates & Docs", icon: "fas fa-certificate", img: "images/certificates.jpg", short: "Free‑sale, market‑standing & non‑conviction certificates." },
  { slug: "fda-ndc", title: "FDA NDC Number Registration", icon: "fas fa-barcode", img: "images/fda_ndc.jpg", short: "Reserve NDC codes with US FDA." },
  { slug: "fda-listing", title: "FDA Device Listing", icon: "fas fa-list", img: "images/fda_listing.jpg", short: "Get your device listed in the FDA database." },
  { slug: "fda-510k", title: "FDA 510(k) Submission", icon: "fas fa-file-signature", img: "images/fda_510k.jpg", short: "Expert support for FDA 510(k) process." },
  { slug: "plant-setup", title: "Manufacturing Plant Setup", icon: "fas fa-industry", img: "images/plant_setup.jpg", short: "Design, validation & compliance support." },
  { slug: "iso-qms", title: "ISO/QMS Certification", icon: "fas fa-award", img: "images/iso_qms.jpg", short: "Consulting for ISO 13485 / 9001 etc." },
  { slug: "udi", title: "UDI – Unique Device ID", icon: "fas fa-barcode", img: "images/udi.jpg", short: "Labeling & data submission support." },
  { slug: "ce-cert", title: "CE Certification Consultancy", icon: "fas fa-globe-europe", img: "images/ce_cert.jpg", short: "EU conformity advice (CE Marking)." },
  { slug: "labelling", title: "Device Labelling Compliance", icon: "fas fa-tags", img: "images/labelling.jpg", short: "EU MDR-compliant labeling services." },
  { slug: "fda-agent", title: "US FDA Agent Services", icon: "fas fa-user-tie", img: "images/fda_agent.jpg", short: "Liaison & recall support." },
  { slug: "turnkey", title: "Turnkey Device Consultancy", icon: "fas fa-cogs", img: "images/turnkey.jpg", short: "End‑to‑end device/IVD regulatory execution." },
];

// const serviceDetails = {
// md5: {
//     title: "MD‑5 Medical Device License",
//     icon: "fas fa-file-medical",
//     img: "images/md5.jpg",
//     full: `<p><strong>MD‑5 License</strong> enables Class A & B device manufacturing in India:</p>
//     <ul>
//         <li>📄 Application & dossier preparation</li>
//         <li>🏭 Facility audit readiness</li>
//         <li>🛂 CDSCO coordination</li>
//         <li>⏳ Approval 60–90 days</li>
//     </ul><p>Your comprehensive license solution from start to finish.</p>`,
// },
// md6: {
//     title: "MD‑6 Loan Premises License",
//     icon: "fas fa-hammer",
//     img: "images/md6.jpg",
//     full: `<p><strong>MD‑6 License</strong> lets you use third-party facilities:</p>
//     <ul>
//         <li>📑 Loan agreements & due diligence</li>
//         <li>🧩 Site audit support</li>
//         <li>🏗️ SOP & compliance setup</li>
//         <li>🔄 Renewals & audit management</li>
//     </ul><p>Ideal for lean manufacturing setups.</p>`,
// },
// md9: {
//     title: "MD‑9 Medical Device License",
//     icon: "fas fa-check-circle",
//     img: "images/md9.jpg",
//     full: `<p><strong>MD‑9 License</strong> for Class C & D devices:</p>
//     <ul>
//         <li>📋 Technical dossier (safety & clinical data)</li>
//         <li>⚙️ QMS aligned with ISO 13485 & 21 CFR 820</li>
//         <li>🔍 Risk & design validation</li>
//         <li>🛡️ Compliance inspections</li>
//     </ul><p>Support from documentation to certification.</p>`,
// },
// md15: {
//     title: "MD‑15 Import License",
//     icon: "fas fa-box-open",
//     img: "images/md15.jpg",
//     full: `<p><strong>MD‑15 License</strong> handles imports into India:</p>
//     <ul>
//         <li>🧾 Customs dossier prep</li>
//         <li>🏷️ Labeling compliance</li>
//         <li>📦 DGFT & CDSCO filing</li>
//         <li>🔄 Renewals & post-import tracking</li>
//     </ul><p>Smooth customs clearance and legal compliance.</p>`,
// },
// md13: {
//     title: "MD‑13 Test License",
//     icon: "fas fa-vial",
//     img: "images/md13.jpg",
//     full: `<p><strong>MD‑13 License</strong> supports lab testing & R&D:</p>
//     <ul>
//         <li>🔬 Bench testing & validation</li>
//         <li>🎓 Training & R&D usage</li>
//         <li>📃 Accredited reporting</li>
//         <li>🔄 Renewal compliance</li>
//     </ul><p>Create or expand an accredited testing lab.</p>`,
// },
// md17: {
//     title: "MD‑17 Import‑Test License",
//     icon: "fas fa-flask",
//     img: "images/md17.jpg",
//     full: `<p><strong>MD‑17 License</strong> combines import & testing:</p>
//     <ul>
//         <li>🚚 Import & test coordination</li>
//         <li>🏷️ Labeling & packaging compliance</li>
//         <li>🧪 ISO-compliant test protocols</li>
//         <li>🔄 Renewals & audit support</li>
//     </ul><p>Ideal for R&D or evaluation-focused imports.</p>`,
// },
// md42: {
//     title: "MD‑42 Wholesale License",
//     icon: "fas fa-truck-loading",
//     img: "images/md42.jpg",
//     full: `<p><strong>MD‑42 License</strong> for wholesale distribution:</p>
//     <ul>
//         <li>🏬 Inventory & distribution setup</li>
//         <li>📦 GDP compliance</li>
//         <li>🌐 FDA import permissions</li>
//         <li>📝 SOP & record-keeping</li>
//     </ul><p>Set up compliant warehousing or distribution networks.</p>`,
// },
// certificates: {
//     title: "Certificates & Documentation",
//     icon: "fas fa-certificate",
//     img: "images/certificates.jpg",
//     full: `<p>Essential regulatory documentation services:</p>
//     <ul>
//         <li>✅ Free-sale & market-standing certificates</li>
//         <li>⚖️ Non-conviction certificates</li>
//         <li>🛃 Export forms (MD‑4)</li>
//         <li>📑 Compliance paperwork for customs</li>
//     </ul><p>Perfect for exporters, tenders, and compliance audits.</p>`,
// },
// "fda-ndc": {
//     title: "FDA NDC Number Registration",
//     icon: "fas fa-barcode",
//     img: "images/fda_ndc.jpg",
//     full: `<p><strong>FDA NDC Registration</strong> process:</p>
//     <ul>
//         <li>📋 Application submission to FDA</li>
//         <li>🧾 Validation & compliance audit</li>
//         <li>🔄 Annual renewals & record management</li>
//     </ul><p>Secure national drug codes for FDA-regulated products.</p>`,
// },
// "fda-listing": {
//     title: "FDA Device Listing",
//     icon: "fas fa-list",
//     img: "images/fda_listing.jpg",
//     full: `<p><strong>FDA Device Listing</strong> service:</p>
//     <ul>
//         <li>🔢 U.S. FDA establishment registration</li>
//         <li>📋 Device listing submission (FDA database)</li>
//         <li>📌 Labeling & classification guidance</li>
//     </ul><p>Ensure your device is legally marketable in the U.S.</p>`,
// },
// "fda-510k": {
//     title: "FDA 510(k) Submission",
//     icon: "fas fa-file-signature",
//     img: "images/fda_510k.jpg",
//     full: `<p><strong>FDA 510(k) Submission</strong> strategy:</p>
//     <ul>
//         <li>📊 Predicate device analysis</li>
//         <li>📝 Premarket documentation</li>
//         <li>⚠️ Risk & safety assessment</li>
//         <li>✅ Submission filing & FDA liaison</li>
//     </ul><p>Accelerate U.S. market entry with expert support.</p>`,
// },
// "plant-setup": {
//     title: "Manufacturing Plant Setup",
//     icon: "fas fa-industry",
//     img: "images/plant_setup.jpg",
//     full: `<p><strong>Plant Setup Services:</strong></p>
//     <ul>
//         <li>🏗️ Facility design & layout</li>
//         <li>🧪 Equipment validation</li>
//         <li>✅ Regulatory compliance strategy</li>
//         <li>📄 QMS documentation & SOPs</li>
//     </ul><p>Turnkey compliance for new or expanding facilities.</p>`,
// },
// "iso-qms": {
//     title: "ISO/QMS Certification",
//     icon: "fas fa-award",
//     img: "images/iso_qms.jpg",
//     full: `<p><strong>ISO & QMS Consulting:</strong></p>
//     <ul>
//         <li>📘 ISO 13485 / 9001 implementation</li>
//         <li>🔄 Audit readiness & support</li>
//         <li>⭐ Recertification guidance</li>
//         <li>👨‍🏫 Staff training & QMS oversight</li>
//     </ul><p>Implement standards for quality and compliance.</p>`,
// },
// udi: {
//     title: "UDI – Unique Device ID",
//     icon: "fas fa-barcode",
//     img: "images/udi.jpg",
//     full: `<p><strong>UDI Registration & Labeling:</strong></p>
//     <ul>
//         <li>🆔 UDI code generation</li>
//         <li>🏷️ Label design & compliance</li>
//         <li>📤 Submission to GUDID & CDSCO</li>
//         <li>✅ Post-market traceability setup</li>
//     </ul><p>Meet global tracking requirements with precision.</p>`,
// },
// "ce-cert": {
//     title: "CE Certification Consultancy",
//     icon: "fas fa-globe-europe",
//     img: "images/ce_cert.jpg",
//     full: `<p><strong>CE Marking Support:</strong></p>
//     <ul>
//         <li>📑 EU technical documentation (MDR)</li>
//         <li>🔍 Notified Body liaison</li>
//         <li>✅ Risk & usability assessments</li>
//         <li>🏁 Declaration of Conformity</li>
//     </ul><p>Enter the EU market with regulatory reassurance.</p>`,
// },
// labelling: {
//     title: "Medical Device Labelling",
//     icon: "fas fa-tags",
//     img: "images/labelling.jpg",
//     full: `<p><strong>Labelling Compliance Service:</strong></p>
//     <ul>
//         <li>🏷️ EU MDR label design</li>
//         <li>📘 Instruction for Use (IFU) drafting</li>
//         <li>📄 Label validation & translations</li>
//         <li>✅ Audit & regulatory updates</li>
//     </ul><p>Clear, compliant labeling for global distribution.</p>`,
// },
// "fda-agent": {
//     title: "US FDA Agent Services",
//     icon: "fas fa-user-tie",
//     img: "images/fda_agent.jpg",
//     full: `<p><strong>U.S. FDA Agent:&nbsp;</strong></p>
//     <ul>
//         <li>📌 FDA FURLS registration</li>
//         <li>☎️ Official liaison & correspondence</li>
//         <li>🚨 Recall & adverse event management</li>
//         <li>🗓️ Annual listing renewals</li>
//     </ul><p>Trusted support for U.S. FDA compliance.</p>`,
// },
// turnkey: {
//     title: "Turnkey Device Consultancy",
//     icon: "fas fa-cogs",
//     img: "images/turnkey.jpg",
//     full: `<p><strong>Turnkey Consultancy:</strong></p>
//     <ul>
//         <li>💡 Product planning to launch</li>
//         <li>🗂️ Regulatory strategy & filings</li>
//         <li>🔧 QMS & compliance implementation</li>
//         <li>🚀 Post-market support & renewals</li>
//     </ul><p>Comprehensive lifecycle management for devices & IVDs.</p>`,
// },
// };

const serviceDetails = {
  md5: {
    title: "MD‑5 Medical Device License",
    icon: "fas fa-file-medical",
    img: "Image/md5.jpeg",
    full: `
      <h4>Overview</h4>
      <p>MD‑5 License enables Class A & B device manufacturing in India. This license is essential for companies looking to manufacture low to medium-risk medical devices.</p>
      <h5>Key Features</h5>
      <ul>
        <li>📄 Application & dossier preparation</li>
        <li>🏭 Facility audit readiness</li>
        <li>🛂 CDSCO coordination</li>
        <li>⏳ Approval within 60–90 days</li>
      </ul>
      <h5>Process Flow</h5>
      <ul>
        <li>Document collection and evaluation</li>
        <li>Submission through CDSCO SUGAM portal</li>
        <li>Inspection & compliance verification</li>
        <li>Final license issuance</li>
      </ul>
      <h5>Profit & Business Benefits</h5>
      <ul>
        <li>✔ Expand market presence in India</li>
        <li>✔ Build trust and regulatory credibility</li>
        <li>✔ Reduce dependency on imports</li>
      </ul>
      <h5>Best Practices & Tips</h5>
      <ul>
        <li>🔍 Conduct a mock audit before actual inspection</li>
        <li>📘 Maintain well-documented SOPs & QMS records</li>
        <li>📆 Renew licenses before expiry to avoid penalties</li>
      </ul>
    `,
  },
  md6: {
    title: "MD‑6 Loan Premises License",
    icon: "fas fa-hammer",
    img: "Image/md6.jpg",
    full: `
      <h4>Overview</h4>
      <p>Allows manufacturing on third-party premises, suitable for businesses leveraging external facilities.</p>
      <h5>Key Features</h5>
      <ul>
        <li>🏭 Contract manufacturing setup</li>
        <li>📄 Agreement documentation</li>
        <li>🛂 CDSCO evaluation</li>
      </ul>
      <h5>Process Flow</h5>
      <ul>
        <li>Drafting agreements</li>
        <li>SUGAM portal submission</li>
        <li>Facility assessment</li>
        <li>Approval & licensing</li>
      </ul>
    `,
  },
  md9: {
    title: "MD‑9 Medical Device License",
    icon: "fas fa-check-circle",
    img: "images/md9.jpg",
    full: `
      <h4>Overview</h4>
      <p>License for Class C & D devices—medium to high-risk medical devices.</p>
      <h5>Key Features</h5>
      <ul>
        <li>🧪 High safety standards</li>
        <li>📘 Detailed technical documentation</li>
        <li>🏭 Plant validation</li>
      </ul>
      <h5>Process Flow</h5>
      <ul>
        <li>Submission & scrutiny</li>
        <li>Facility inspection</li>
        <li>Approval & licensing</li>
      </ul>
    `,
  },
  md15: {
    title: "MD‑15 Import License",
    icon: "fas fa-box-open",
    img: "images/md15.jpg",
    full: `
      <h4>Overview</h4>
      <p>Required to import medical devices into India (all classes).</p>
      <h5>Key Features</h5>
      <ul>
        <li>🌎 International product clearance</li>
        <li>📦 Authorized Indian agent</li>
        <li>🛂 CDSCO approval</li>
      </ul>
    `,
  },
  md13: {
    title: "MD‑13 Test License",
    icon: "fas fa-vial",
    img: "images/md13.jpg",
    full: `
      <h4>Overview</h4>
      <p>License for testing and evaluation of devices in India.</p>
      <h5>Key Features</h5>
      <ul>
        <li>🔬 Clinical trials/testing</li>
        <li>📄 MD-12 / MD-13 approval</li>
      </ul>
    `,
  },
  md17: {
    title: "MD‑17 Import‑Test License",
    icon: "fas fa-flask",
    img: "images/md17.jpg",
    full: `
      <h4>Overview</h4>
      <p>Allows import for test or training purposes, not for sale.</p>
      <h5>Key Features</h5>
      <ul>
        <li>📦 Limited-use import</li>
        <li>📘 Simplified documentation</li>
      </ul>
    `,
  },
  md42: {
    title: "MD‑42 Wholesale License",
    icon: "fas fa-truck-loading",
    img: "images/md42.jpg",
    full: `
      <h4>Overview</h4>
      <p>License to stock and sell medical devices wholesale in India.</p>
      <h5>Key Features</h5>
      <ul>
        <li>🏬 Warehouse setup</li>
        <li>📄 Sales records & compliance</li>
      </ul>
    `,
  },
  certificates: {
    title: "Certificates & Docs",
    icon: "fas fa-certificate",
    img: "images/certificates.jpg",
    full: `
      <h4>Overview</h4>
      <p>Includes Free Sale, Market Standing, and Non-Conviction certificates.</p>
      <h5>Key Uses</h5>
      <ul>
        <li>🌐 International compliance</li>
        <li>📝 Documentation support</li>
      </ul>
    `,
  },
  "fda-ndc": {
    title: "FDA NDC Number Registration",
    icon: "fas fa-barcode",
    img: "images/fda_ndc.jpg",
    full: `
      <h4>Overview</h4>
      <p>Register your product with a National Drug Code (NDC) via US FDA.</p>
    `,
  },
  "fda-listing": {
    title: "FDA Device Listing",
    icon: "fas fa-list",
    img: "images/fda_listing.jpg",
    full: `
      <h4>Overview</h4>
      <p>List your medical device with the US FDA database for compliance.</p>
    `,
  },
  "fda-510k": {
    title: "FDA 510(k) Submission",
    icon: "fas fa-file-signature",
    img: "images/fda_510k.jpg",
    full: `
      <h4>Overview</h4>
      <p>Submit 510(k) for clearance to market in the USA. Get expert guidance.</p>
    `,
  },
  "plant-setup": {
    title: "Manufacturing Plant Setup",
    icon: "fas fa-industry",
    img: "images/plant_setup.jpg",
    full: `
      <h4>Overview</h4>
      <p>End-to-end support in setting up a compliant manufacturing facility.</p>
    `,
  },
  "iso-qms": {
    title: "ISO/QMS Certification",
    icon: "fas fa-award",
    img: "images/iso_qms.jpg",
    full: `
      <h4>Overview</h4>
      <p>Guidance for ISO 13485, ISO 9001 and other QMS systems.</p>
    `,
  },
  udi: {
    title: "UDI – Unique Device ID",
    icon: "fas fa-barcode",
    img: "images/udi.jpg",
    full: `
      <h4>Overview</h4>
      <p>Support for UDI implementation as per global regulatory requirements.</p>
    `,
  },
  "ce-cert": {
    title: "CE Certification Consultancy",
    icon: "fas fa-globe-europe",
    img: "images/ce_cert.jpg",
    full: `
      <h4>Overview</h4>
      <p>EU CE marking advisory for medical and IVD devices.</p>
    `,
  },
  labelling: {
    title: "Device Labelling Compliance",
    icon: "fas fa-tags",
    img: "images/labelling.jpg",
    full: `
      <h4>Overview</h4>
      <p>Ensure EU MDR/IVDR-compliant labeling of medical devices.</p>
    `,
  },
  "fda-agent": {
    title: "US FDA Agent Services",
    icon: "fas fa-user-tie",
    img: "images/fda_agent.jpg",
    full: `
      <h4>Overview</h4>
      <p>US local agent service for foreign manufacturers entering the US market.</p>
    `,
  },
  turnkey: {
    title: "Turnkey Device Consultancy",
    icon: "fas fa-cogs",
    img: "images/turnkey.jpg",
    full: `
      <h4>Overview</h4>
      <p>End-to-end support from concept to regulatory approval and market launch.</p>
    `,
  },
};
