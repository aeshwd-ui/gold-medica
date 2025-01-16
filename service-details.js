const services = [
  {
    id: 1,
    name: "Vascular Surgery",
    about: "Vascular surgery is a branch of surgery that treats diseases of the vascular system, including arteries, veins, and lymphatic circulation.",
    description: "Vascular surgery involves surgical procedures to treat conditions such as varicose veins, aneurysms, and peripheral artery disease. It focuses on repairing, replacing, or bypassing blood vessels to restore blood flow to affected areas.",
    diseases: [
      "Infection: Infections in blood vessels or tissues surrounding blood vessels can occur, especially after surgery. These infections can affect the healing process and may require antibiotics or surgical intervention.",
      "Blood Clots (Thrombosis): A condition where a blood clot forms inside a blood vessel, potentially obstructing blood flow. Clots can cause pain, swelling, and other complications if left untreated.",
      "Aneurysm: A bulge or weakness in the wall of an artery, often occurring in the aorta or brain. If untreated, an aneurysm can rupture, leading to life-threatening bleeding.",
      "Graft Complications: Occurs when a graft, used to bypass a blocked artery, fails or becomes infected. This can lead to reduced blood flow and the need for further surgical intervention.",
      "Stroke: A blockage or rupture in the brain’s blood vessels leading to brain damage. Stroke can be caused by vascular conditions like carotid artery disease.",
      "Peripheral Artery Disease (PAD) Worsening: A condition where narrowing or blockage of peripheral arteries reduces blood flow to limbs, causing pain, difficulty walking, and potential limb loss.",
      "Nerve Injury: Surgical procedures near major nerves may inadvertently cause nerve damage, leading to numbness, weakness, or loss of sensation in the affected area.",
      "Bleeding: Uncontrolled bleeding during or after surgery can occur, requiring additional intervention to prevent blood loss and stabilize the patient.",
      "Kidney Damage: Vascular disease can impair the blood flow to the kidneys, leading to renal failure if untreated.",
      "Heart Attack: A heart attack may occur due to a blockage in coronary arteries, requiring immediate intervention to restore blood flow and minimize heart muscle damage."
    ],
    treatment: [
      "Endovenous Laser Therapy (EVLT) for varicose veins: A minimally invasive procedure that uses laser energy to seal off varicose veins, causing them to shrink and eventually disappear.",
      "Stenting for artery blockages or aneurysms: A procedure where a small mesh tube (stent) is inserted into the blocked or weakened artery to hold it open and restore normal blood flow.",
      "Bypass Surgery to restore blood flow in blocked arteries: A surgical technique used to reroute blood around a blockage, using a graft from another vessel or synthetic material.",
      "Angioplasty to widen narrowed or blocked arteries: A procedure that involves inflating a balloon inside the artery to open it up and improve blood flow, often followed by stent placement.",
      "Endarterectomy to remove plaque from arteries: A surgical procedure in which plaque buildup is removed from an artery to restore healthy blood flow.",
      "Ultrasound-guided foam sclerotherapy for varicose veins: A minimally invasive technique in which a solution is injected into the veins to close them off, reducing swelling and discomfort.",
      "Thrombectomy to remove blood clots: A procedure to remove blood clots from arteries or veins, often performed in emergency situations to restore blood flow and prevent organ damage.",
      "Vascular graft surgery for graft complications: A surgery in which a failed graft is replaced or repaired to restore blood flow.",
      "Balloon angioplasty for renal artery disease: A procedure used to open up narrowed or blocked arteries supplying blood to the kidneys, improving kidney function and blood pressure regulation.",
      "Aneurysm Repair Surgery (open or endovascular): A surgery to repair or replace an aneurysm using either traditional open surgery or a minimally invasive endovascular approach, depending on the location and size of the aneurysm."
    ],
    img: "images/diseases/vascular/vascular2.webp",
    aboutImg: "images/diseases/vascular/vascular1.jpg",
    descriptionImg: "images/diseases/vascular/vascular3.jpg",
    diseasesImg: "images/diseases/vascular/vascular4.jpg",
  },
  {
    id: 2,
    name: "Neurosurgery",
    about: "Neurosurgery is the surgical treatment of nervous system disorders, including the brain, spine, and peripheral nerves.",
    description: "Neurosurgery involves procedures to treat conditions such as brain tumors, spinal cord injuries, and neurological disorders. It can involve removing tumors, repairing spinal injuries, and alleviating nerve pressure.",
    diseases: [
      "Brain Tumors: Abnormal growths within the brain can disrupt normal brain functions, leading to headaches, seizures, and cognitive impairments. Treatment may involve surgery, radiation therapy, or chemotherapy.",
      "Spinal Cord Injuries: Damage to the spinal cord due to trauma can lead to paralysis, loss of sensation, and other serious complications. Neurosurgeons may perform decompressive surgery or spinal fusion to stabilize the injury.",
      "Epilepsy: A neurological disorder marked by recurrent seizures. Surgery may be considered in patients who do not respond to medication, such as the removal of a seizure focus or implantation of a responsive neurostimulation device."
    ],
    treatment: [
      "Craniotomy: A surgical procedure where a part of the skull is removed to access the brain. It is commonly used to remove tumors, treat aneurysms, or relieve pressure after brain injury.",
      "Spinal Fusion: A surgery that joins two or more vertebrae in the spine to prevent movement between them, commonly performed after a traumatic spinal injury or to treat degenerative spine conditions.",
      "Endoscopic Procedures: Minimally invasive procedures that use small incisions and a camera to perform surgeries like removing tumors or draining fluid from the brain or spinal cord."
    ],
    img: "images/diseases/neurosurgery/neurosurgery1.jpg",
    aboutImg: "images/diseases/neurosurgery/neurosurgery2.jpg",
    descriptionImg: "images/diseases/neurosurgery/neurosurgery3.jpg",
    diseasesImg: "images/diseases/neurosurgery/neurosurgery4.jpg",
  },
  {
    id: 3,
    name: "Pulmonary Surgery",
    about: "Pulmonary surgery is concerned with the surgical treatment of diseases affecting the lungs and respiratory system.",
    description: "Pulmonary surgery involves procedures like lobectomy, pneumonectomy, and lung volume reduction surgery to treat diseases such as lung cancer, emphysema, and chronic obstructive pulmonary disease (COPD).",
    diseases: [
      "Lung Cancer: A type of cancer that begins in the lungs and can spread to other parts of the body. Symptoms include chronic cough, chest pain, and difficulty breathing.",
      "Chronic Obstructive Pulmonary Disease (COPD): A progressive lung disease that makes breathing difficult. It is commonly caused by smoking and includes emphysema and chronic bronchitis.",
      "Pulmonary Fibrosis: A condition where lung tissue becomes damaged and scarred, leading to breathing difficulties and reduced oxygen intake.",
      "Pneumonia: An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.",
      "Tuberculosis (TB): A bacterial infection that primarily affects the lungs but can also spread to other parts of the body."
    ],
    treatment: [
      "Lobectomy: A surgical procedure to remove a lobe of the lung that is affected by disease.",
      "Pneumonectomy: The removal of an entire lung, often done to treat advanced lung cancer.",
      "Lung Volume Reduction Surgery: A procedure to remove damaged lung tissue to allow the remaining lung to function better in patients with emphysema.",
      "Bronchial Stenting: Inserting a stent into the bronchial tubes to keep the airways open in cases of obstruction."
    ],
    img: "images/diseases/pulmonarysurgery/Pulmonary Surgery1.jpg",
    aboutImg: "images/diseases/pulmonarysurgery/Pulmonary Surgery2.jpg",
    descriptionImg: "images/diseases/pulmonarysurgery/Pulmonary Surgery3.jpg",
    diseasesImg: "images/diseases/pulmonarysurgery/Pulmonary Surgery4.webp",
  },
  {
    id: 4,
    name: "Nephrology",
    about: "Nephrology deals with the diagnosis and treatment of kidney diseases.",
    description: "Nephrology involves treating conditions such as chronic kidney disease, dialysis, and kidney transplant. It focuses on managing kidney function and preventing kidney failure.",
    diseases: [
      "Chronic Kidney Disease (CKD): A long-term condition where the kidneys do not function properly, leading to waste buildup in the body.",
      "Acute Kidney Injury (AKI): Sudden damage to the kidneys that can cause them to stop working.",
      "Kidney Stones: Hard deposits of minerals and salts that form in the kidneys, causing severe pain when they move.",
      "Polycystic Kidney Disease (PKD): A genetic disorder characterized by the growth of numerous cysts in the kidneys.",
      "End-Stage Renal Disease (ESRD): The final stage of kidney failure, requiring dialysis or a kidney transplant."
    ],
    treatment: [
      "Dialysis: A procedure that removes waste products and excess fluids from the blood when the kidneys are no longer able to perform these functions.",
      "Kidney Transplant: A surgery in which a healthy kidney is transplanted into a patient with kidney failure.",
      "Medications: ACE inhibitors, angiotensin receptor blockers (ARBs), and other medications to control blood pressure and prevent further kidney damage.",
      "Extracorporeal Shock Wave Lithotripsy: A non-invasive treatment to break down kidney stones using shock waves."
    ],
    img: "images/diseases/nephrology/nephro1.jpg",
    aboutImg: "images/diseases/nephrology/nephro2.jpg",
    descriptionImg: "images/diseases/nephrology/nephro4.jpg",
    diseasesImg: "images/diseases/nephrology/nephro3.png",
  },
  {
    id: 5,
    name: "Urology",
    about: "Urology focuses on the treatment of diseases related to the urinary tract and male reproductive system.",
    description: "Urology addresses conditions such as prostate cancer, urinary tract infections, and kidney stones, with treatments ranging from medications to surgical interventions.",
    diseases: [
      "Urinary Tract Infections (UTIs): Infections that affect any part of the urinary system, causing painful urination and abdominal discomfort.",
      "Kidney Stones: Hard deposits of minerals and salts that form in the kidneys, often causing pain during urination.",
      "Prostate Cancer: A cancer that affects the prostate gland in men, often leading to difficulty urinating.",
      "Benign Prostatic Hyperplasia (BPH): A non-cancerous enlargement of the prostate gland that affects urinary flow.",
      "Erectile Dysfunction: The inability to achieve or maintain an erection suitable for sexual intercourse."
    ],
    treatment: [
      "Prostatectomy: A surgical procedure to remove part or all of the prostate gland, often performed for prostate cancer or BPH.",
      "Lithotripsy: A non-invasive treatment that uses shock waves to break up kidney stones into smaller pieces.",
      "Cystoscopy: A procedure in which a thin tube is inserted into the bladder to examine the urinary tract or to remove bladder stones.",
      "Medications: Alpha-blockers and 5-alpha reductase inhibitors to treat BPH and erectile dysfunction."
    ],
    img: "images/diseases/urology/urology1.jpg",
    aboutImg: "images/diseases/urology/urology2.jpg",
    descriptionImg: "images/diseases/urology/urology3.avif",
    diseasesImg: "images/diseases/urology/urology4.webp",
  },
  {
    id: 6,
    name: "Gynecology",
    about: "Gynecology is the medical practice focused on the female reproductive system.",
    description: "Gynecology includes the diagnosis and treatment of conditions such as menstrual disorders, pelvic pain, and cancers of the reproductive system.",
    diseases: [
      "Endometriosis: A condition where tissue similar to the lining of the uterus grows outside of it, causing pelvic pain and infertility.",
      "Polycystic Ovary Syndrome (PCOS): A hormonal disorder causing enlarged ovaries with small cysts, leading to irregular periods and infertility.",
      "Uterine Fibroids: Non-cancerous growths in the uterus that can cause heavy periods, pain, and pregnancy complications.",
      "Cervical Cancer: Cancer that starts in the cervix and is often linked to HPV infection.",
      "Pelvic Inflammatory Disease (PID): An infection of the female reproductive organs that can cause infertility if left untreated."
    ],
    treatment: [
      "Hysterectomy: A surgery to remove the uterus, performed to treat conditions such as fibroids, endometriosis, or cancer.",
      "Laparoscopy: A minimally invasive surgery used to diagnose and treat conditions like endometriosis and ovarian cysts.",
      "Medication: Hormonal therapies, pain relievers, and antibiotics to manage conditions like PCOS, fibroids, and PID."
    ],
    img: "images/diseases/gynecology/gynecology1.webp",
    aboutImg: "images/diseases/gynecology/gynecology2.jpg",
    descriptionImg: "images/diseases/gynecology/gynecology3.jpg",
    diseasesImg: "images/diseases/gynecology/gynecology4.jpg",
  },
  {
    id: 7,
    name: "Oncology",
    about: "Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.",
    description: "Oncology involves various treatments such as surgery, chemotherapy, radiation therapy, and immunotherapy to treat different types of cancer. It focuses on both the physical and emotional needs of patients.",
    diseases: [
      "Breast Cancer: A type of cancer that forms in the cells of the breast. Symptoms may include a lump, changes in the skin, and abnormal discharge.",
      "Lung Cancer: Cancer that starts in the lungs, often caused by smoking or exposure to toxic substances. It leads to symptoms like chronic cough, chest pain, and difficulty breathing.",
      "Colorectal Cancer: Cancer of the colon or rectum, commonly presenting with changes in bowel habits, abdominal pain, and weight loss.",
      "Leukemia: A cancer of the blood and bone marrow, leading to fatigue, frequent infections, and abnormal bleeding.",
      "Lymphoma: Cancer of the lymphatic system that can cause swollen lymph nodes, fever, and weight loss."
    ],
    treatment: [
      "Chemotherapy: A cancer treatment using drugs that kill or slow the growth of cancer cells. It is often used in combination with surgery or radiation.",
      "Radiation Therapy: The use of high-energy rays to kill cancer cells or shrink tumors. It is often used for localized cancers like lung or breast cancer.",
      "Surgery: Surgical procedures to remove tumors, such as mastectomy (breast cancer) or colon resection (colorectal cancer).",
      "Immunotherapy: A treatment that boosts the body’s immune system to fight cancer cells, used in cancers like melanoma and lung cancer."
    ],
    img: "images/diseases/oncology/oncology1.jpg",
    aboutImg: "images/diseases/oncology/oncology2.jpg",
    descriptionImg: "images/diseases/oncology/oncology3.jpg",
    diseasesImg: "images/diseases/oncology/oncology4.jpg",
  },
  {
    id: 8,
    name: "Orthopedic",
    about: "Orthopedic surgery is the branch of surgery that deals with conditions involving the musculoskeletal system, including bones, joints, ligaments, and muscles.",
    description: "Orthopedic surgery treats a wide range of conditions, from fractures to degenerative diseases, with treatments that include surgery, physical therapy, and rehabilitation.",
    diseases: [
      "Osteoarthritis: A degenerative joint disease causing pain, stiffness, and reduced mobility. It is most common in weight-bearing joints like the knees, hips, and spine.",
      "Fractures: Broken bones due to trauma, which can range from simple fractures to complex, displaced fractures requiring surgical intervention.",
      "Scoliosis: A condition characterized by an abnormal curvature of the spine, often requiring corrective surgery or bracing in severe cases.",
      "Tendinitis: Inflammation of tendons, often caused by overuse. Common in the shoulder, elbow, and knee joints.",
      "Spinal Disc Herniation: A condition where a disc in the spine bulges or ruptures, pressing on nerves and causing pain, numbness, or weakness."
    ],
    treatment: [
      "Joint Replacement Surgery: Surgery to replace damaged joints, such as total knee or hip replacement, often used for osteoarthritis.",
      "Fracture Repair: Surgical procedures such as internal fixation, where pins, plates, or screws are used to stabilize broken bones.",
      "Spinal Fusion: A procedure to join two or more vertebrae to reduce pain and stabilize the spine in cases of disc herniation or scoliosis.",
      "Arthroscopy: A minimally invasive surgery to diagnose and treat joint problems, such as meniscus tears or ligament injuries."
    ],
    img: "images/diseases/orthopedic/orthopedic1.jpg",
    aboutImg: "images/diseases/orthopedic/orthopedic2.jpg",
    descriptionImg: "images/diseases/orthopedic/orthopedic3.jpg",
    diseasesImg: "images/diseases/orthopedic/orthopedic4.png",
  },
  {
    id: 9,
    name: "Neurology",
    about: "Neurology is the branch of medicine that focuses on the diagnosis and treatment of disorders related to the nervous system.",
    description: "Neurology addresses conditions such as epilepsy, stroke, Alzheimer's disease, and Parkinson's disease, using both medical and surgical treatments.",
    diseases: [
      "Epilepsy: A neurological disorder that causes recurrent seizures. Seizures occur when there is abnormal electrical activity in the brain.",
      "Alzheimer's Disease: A progressive neurodegenerative disease that causes memory loss, confusion, and changes in behavior.",
      "Parkinson's Disease: A progressive movement disorder that affects the nervous system, leading to tremors, rigidity, and bradykinesia.",
      "Stroke: A condition where blood flow to part of the brain is interrupted, causing brain cell death. It leads to long-term disabilities depending on the area affected.",
      "Multiple Sclerosis: A disease where the immune system attacks the protective sheath of nerve fibers, leading to nerve damage and disrupting communication between the brain and body."
    ],
    treatment: [
      "Anticonvulsant Medications: Drugs like phenytoin and carbamazepine to manage epilepsy by stabilizing electrical activity in the brain.",
      "Deep Brain Stimulation (DBS): A surgical procedure that implants a device to stimulate the brain and alleviate symptoms of Parkinson’s disease.",
      "Thrombolytic Therapy: A treatment for stroke where clot-busting drugs are used to dissolve blood clots and restore blood flow to the brain.",
      "Corticosteroids: Used to manage inflammation in multiple sclerosis or after a stroke to reduce swelling and prevent further nerve damage."
    ],
    img: "images/diseases/neurology/neu1.jpg",
    aboutImg: "images/diseases/neurology/neu2.webp",
    descriptionImg: "images/diseases/neurology/neu3.jpg",
    diseasesImg: "images/diseases/neurology/neu4.avif",
  },
  {
    id: 10,
    name: "Cardiology",
    about: "Cardiology is the branch of medicine that deals with disorders of the heart and blood vessels.",
    description: "Cardiology focuses on diagnosing and treating conditions like coronary artery disease, heart failure, and arrhythmias, with treatments including medications, surgeries, and lifestyle modifications.",
    diseases: [
      "Coronary Artery Disease (CAD): A condition where the coronary arteries become narrowed or blocked, leading to chest pain or heart attacks.",
      "Heart Failure: A condition where the heart is unable to pump blood effectively, leading to symptoms like fatigue, fluid retention, and shortness of breath.",
      "Arrhythmias: Abnormal heart rhythms, including atrial fibrillation, which can lead to palpitations, dizziness, and even stroke.",
      "Myocardial Infarction (Heart Attack): A blockage in one or more coronary arteries leading to the death of heart muscle tissue.",
      "Hypertension: High blood pressure that can lead to heart disease, kidney damage, and strokes if not controlled."
    ],
    treatment: [
      "Angioplasty and Stenting: Procedures used to open blocked coronary arteries and insert a stent to keep the artery open.",
      "Bypass Surgery: Coronary artery bypass grafting (CABG) surgery to reroute blood flow around blocked arteries.",
      "Pacemaker Implantation: A device implanted to help regulate the heart’s rhythm in cases of arrhythmias.",
      "Medications: Beta-blockers, ACE inhibitors, and calcium channel blockers to manage conditions like hypertension and arrhythmias."
    ],
    img: "images/diseases/cardiology/cardio1.jpg",
    aboutImg: "images/diseases/cardiology/cardio2.jpg",
    descriptionImg: "images/diseases/cardiology/cardio3.jpg",
    diseasesImg: "images/diseases/cardiology/cardio4.jpg",
  },
  {
    id: 11,
    name: "Radiology",
    about: "Radiology is the medical specialty that uses imaging techniques to diagnose and treat diseases within the body.",
    description: "Radiology uses X-rays, CT scans, MRIs, and ultrasounds to create images of the inside of the body. It helps in diagnosing conditions like fractures, tumors, and internal injuries.",
    diseases: [
      "Fractures: Bone breaks or cracks that can be detected through X-rays or CT scans.",
      "Cancer: Radiology is essential for identifying tumors in organs like the lungs, liver, and brain using techniques like MRI and PET scans.",
      "Internal Bleeding: CT scans and ultrasounds help detect internal bleeding in organs such as the abdomen or brain.",
      "Stroke: Imaging techniques like CT and MRI help in diagnosing strokes and determining the affected areas of the brain.",
      "Spinal Disorders: MRI and CT scans are used to detect conditions like herniated discs, scoliosis, or spinal tumors."
    ],
    treatment: [
      "Interventional Radiology: A non-surgical procedure that uses imaging guidance to treat conditions like blocked arteries, internal bleeding, or tumors.",
      "CT-Guided Biopsy: A procedure where a needle is guided by CT imaging to take a sample from an abnormal tissue for biopsy.",
      "Radiation Therapy: The use of targeted radiation to treat tumors, often guided by imaging to precisely direct the radiation to the affected area."
    ],
    img: "images/diseases/radiology/radio1.jpg",
    aboutImg: "images/diseases/radiology/radio2.jpg",
    descriptionImg: "images/diseases/radiology/radio3.jpg",
    diseasesImg: "images/diseases/radiology/radio4.jpg",
  },
  {
    id: 12,
    name: "Pediatrics",
    about: "Pediatrics is the branch of medicine that deals with the medical care of infants, children, and adolescents.",
    description: "Pediatrics focuses on the diagnosis and treatment of childhood illnesses, developmental issues, and preventive health care.",
    diseases: [
      "Respiratory Infections: Common infections like the flu, bronchitis, and pneumonia that affect children’s airways.",
      "Asthma: A chronic disease that affects the lungs, causing difficulty breathing due to airway inflammation.",
      "Croup: A viral infection that causes inflammation and narrowing of the airway, leading to breathing difficulties and a distinctive barking cough.",
      "Viral Infections: Including measles, chickenpox, and hand-foot-mouth disease, which are common among children.",
      "Pediatric Diabetes: Type 1 and Type 2 diabetes in children that affects their blood sugar regulation."
    ],
    treatment: [
      "Vaccinations: Immunizations against diseases like measles, mumps, rubella, and chickenpox.",
      "Nebulizer Treatments: Used for managing asthma and respiratory infections by delivering medication directly into the lungs.",
      "Insulin Therapy: Used for treating pediatric diabetes to regulate blood sugar levels.",
      "Physical Therapy: To address developmental or musculoskeletal issues in children, including motor skill improvement."
    ],
    img: "images/diseases/pediatrics/ped1.jpg",
    aboutImg: "images/diseases/pediatrics/ped2.jpg",
    descriptionImg: "images/diseases/pediatrics/ped3.jpg",
    diseasesImg: "images/diseases/pediatrics/ped4.jpg",
  }
];



// Fetch the service ID from the URL query string
const params = new URLSearchParams(window.location.search);
const serviceId = params.get('id'); // Get the "id" parameter value

if (serviceId) {
  // Find the service object by ID
  const service = services.find(s => s.id == serviceId);

  if (service) {
    const detailsContainer = document.getElementById("service-details");

    // Populate the service details dynamically
    detailsContainer.innerHTML = `
      <h1>${service.name}</h1>
      <img src="${service.img}" alt="${service.name}">
      
      <div class="section">
        <h3>About</h3>
        <img src="${service.aboutImg}" alt="About ${service.name}">
        <p>${service.about}</p>
      </div>
      
      <div class="section">
        <h3>Description</h3>
        <img src="${service.descriptionImg}" alt="Description ${service.name}">
        <p>${service.description}</p>
      </div>
      
      <div class="section">
        <h3>Diseases Treated</h3>
        <img src="${service.diseasesImg}" alt="Diseases ${service.name}">
        <ul>
          ${service.diseases.map(disease => `<li>${disease}</li>`).join('')}
        </ul>
      </div>
      
      <div class="section">
        <h3>Treatments</h3>
        <p>${service.treatment}</p>
      </div>
    `;
  } else {
    document.getElementById("service-details").innerHTML = `<p>Service not found.</p>`;
  }
} else {
  document.getElementById("service-details").innerHTML = `<p>Service ID is missing from the URL.</p>`;
}