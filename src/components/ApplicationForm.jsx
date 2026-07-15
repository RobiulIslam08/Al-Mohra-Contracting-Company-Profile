import React, { useState } from 'react';
import api from '../api'; // আপনার তৈরি করা কাস্টম Axios ইন্সট্যান্স

// ==========================================
// ১. ৪টি ভাষার ট্রান্সলেশন ডাটা অবজেক্ট
// ==========================================
const translations = {
  English: {
    title: "Employee Registration & Application",
    subtitle: "Please fill in the details matching your legal documents (Iqama / Passport).",
    personalInfo: "Personal Information",
    fullName: "Full Name",
    fullNamePlace: "As per Passport / Iqama",
    email: "Email Address",
    emailPlace: "example@mail.com",
    nationality: "Nationality",
    nationalityPlace: "Country Name",
    dob: "Birth Date (DOB)",
    identityInfo: "Identity & Contact Info",
    iqama: "Iqama Number",
    iqamaPlace: "2XXXXXXXXX",
    iqamaExpiry: "Iqama Expiry Date",
    passport: "Passport Number",
    passportPlace: "EXXXXXXXX",
    passportExpiry: "Passport Expiry Date",
    mobile: "Mobile Number",
    mobilePlace: "+966 5X XXX XXXX",
    whatsapp: "WhatsApp Number",
    jobDetails: "Job & Reference Details",
    position: "Position / Trade",
    positionPlace: "Your Trade Name",
    location: "Location",
    experience: "Job Experience",
    experiencePlace: "Your Experience Years",
    refName: "Reference Name",
    refNamePlace: "Name of Referencer",
    refPhone: "Referencer Phone Number",
    refPhonePlace: "Referencer Mobile",
    docUpload: "Documents Upload",
    passPhoto: "Passport Size Photo",
    iqamaCopy: "Iqama Copy",
    passCopy: "Passport Photo",
    medical: "Medical Report",
    muqeem: "Muqeem / Absher Dashboard",
    insurance: "Insurance Photo",
    ajeer: "Ajeer Paper",
    driving: "Driving License",
    carInsurance: "Car Insurance",
    carFront: "Car Photo (Front)",
    carBack: "Car Photo (Back)",
    istimara: "Vehicle Registration (Istimara)",
    signature: "Signature Image",
    notice: "* Notice: Upon submission, this registration will be pushed directly under \"Pending\" verification status.",
    btnSaving: "Saving Records...",
    btnSave: "Save Employee Record",
    successMsg: "Your Application Sent Successfully Please wait for review, As soon as Possible any Admin will Response for it!",
    failedMsg: "Failed",
    validationErr: "Validation error occurred.",
    serverErr: "Something went wrong with the server connection."
  },
  Bangla: {
    title: "কর্মচারী নিবন্ধন ও আবেদন ফরম",
    subtitle: "অনুগ্রহ করে আপনার আইনি নথিপত্রের (ইকামা / পাসপোর্ট) সাথে মিল রেখে বিবরণী পূরণ করুন।",
    personalInfo: "ব্যক্তিগত তথ্য",
    fullName: "পূর্ণ নাম",
    fullNamePlace: "পাসপোর্ট / ইকামা অনুযায়ী",
    email: "ইমেইল ঠিকানা",
    emailPlace: "example@mail.com",
    nationality: "জাতীয়তা",
    nationalityPlace: "দেশের নাম",
    dob: "জন্ম তারিখ (DOB)",
    identityInfo: "পরিচয় এবং যোগাযোগের তথ্য",
    iqama: "ইকামা নাম্বার",
    iqamaPlace: "2XXXXXXXXX",
    iqamaExpiry: "ইকামা মেয়াদের তারিখ",
    passport: "পাসপোর্ট নাম্বার",
    passportPlace: "EXXXXXXXX",
    passportExpiry: "পাসপোর্ট মেয়াদের তারিখ",
    mobile: "মোবাইল নাম্বার",
    mobilePlace: "+966 5X XXX XXXX",
    whatsapp: "হোয়াটসঅ্যাপ নাম্বার",
    jobDetails: "চাকরি ও রেফারেন্সের বিবরণ",
    position: "পদবি / পেশা",
    positionPlace: "আপনার পেশার নাম",
    location: "লোকেশন / বর্তমান অবস্থান",
    experience: "কাজের অভিজ্ঞতা",
    experiencePlace: "অভিজ্ঞতার বছর",
    refName: "রেফারেন্সের নাম",
    refNamePlace: "রেফারেন্সকারীর নাম",
    refPhone: "রেফারেন্সকারীর ফোন নাম্বার",
    refPhonePlace: "রেফারেন্সকারীর মোবাইল",
    docUpload: "নথিপত্র বা ডকুমেন্ট আপলোড",
    passPhoto: "পাসপোর্ট সাইজ ছবি",
    iqamaCopy: "ইকামা কপি",
    passCopy: "পাসপোর্ট কপি",
    medical: "মেডিকেল রিপোর্ট",
    muqeem: "মুকিম / আবশির ড্যাশবোর্ড",
    insurance: "ইন্স্যুরেন্স বা বীমার ছবি",
    ajeer: "আজির পেপার",
    driving: "ড্রাইভিং লাইসেন্স",
    carInsurance: "গাড়ির ইন্স্যুরেন্স",
    carFront: "গাড়ির ছবি (সামনে)",
    carBack: "গাড়ির ছবি (পেছনে)",
    istimara: "গাড়ির রেজিস্ট্রেশন (ইস্তিমারা)",
    signature: "স্বাক্ষরের ছবি",
    notice: "* নোটিশ: জমা দেওয়ার পরে, এই আবেদনটি সরাসরি \"পেন্ডিং\" যাচাইকরণ স্ট্যাটাসের অধীনে চলে যাবে।",
    btnSaving: "রেকর্ড সংরক্ষণ করা হচ্ছে...",
    btnSave: "কর্মচারী রেকর্ড সংরক্ষণ করুন",
    successMsg: "আপনার আবেদনটি সফলভাবে পাঠানো হয়েছে! অনুগ্রহ করে পর্যালোচনার জন্য অপেক্ষা করুন, যত দ্রুত সম্ভব অ্যাডমিন রেসপন্স করবেন।",
    failedMsg: "ব্যর্থ হয়েছে",
    validationErr: "ভ্যালিডেশন ত্রুটি ঘটেছে।",
    serverErr: "সার্ভার সংযোগে কিছু ভুল হয়েছে।"
  },
  Arabic: {
    title: "تسجيل الموظفين وطلب التوظيف",
    subtitle: "يرجى ملء التفاصيل المطابقة لوثائقك القانونية (الإقامة / جواز السفر).",
    personalInfo: "معلومات شخصية",
    fullName: "الاسم الكامل",
    fullNamePlace: "حسب جواز السفر / الإقامة",
    email: "البريد الإلكتروني",
    emailPlace: "example@mail.com",
    nationality: "الجنسية",
    nationalityPlace: "اسم الدولة",
    dob: "تاريخ الميلاد",
    identityInfo: "الهوية ومعلومات الاتصال",
    iqama: "رقم الإقامة",
    iqamaPlace: "2XXXXXXXXX",
    iqamaExpiry: "تاريخ انتهاء الإقامة",
    passport: "رقم جواز السفر",
    passportPlace: "EXXXXXXXX",
    passportExpiry: "تاريخ انتهاء جواز السفر",
    mobile: "رقم الجوال",
    mobilePlace: "+966 5X XXX XXXX",
    whatsapp: "رقم الواتساب",
    jobDetails: "تفاصيل الوظيفة والمراجع",
    position: "المسمى الوظيفي / المهنة",
    positionPlace: "اسم مهنتك",
    location: "الموقع",
    experience: "خبرة العمل",
    experiencePlace: "سنوات الخبرة",
    refName: "اسم المرجع",
    refNamePlace: "اسم الشخص المرجعي",
    refPhone: "رقم هاتف المرجع",
    refPhonePlace: "جوال الشخص المرجعي",
    docUpload: "تحميل المستندات",
    passPhoto: "صورة شخصية بخلفية بيضاء",
    iqamaCopy: "نسخة من الإقامة",
    passCopy: "صورة جواز السفر",
    medical: "التقرير الطبي",
    muqeem: "شاشة مقيم / أبشر",
    insurance: "صورة التأمين",
    ajeer: "ورقة أجير",
    driving: "رخصة القيادة",
    carInsurance: "تأمين السيارة",
    carFront: "صورة السيارة (من الأمام)",
    carBack: "صورة السيارة (من الخلف)",
    istimara: "رخصة السير (الاستمارة)",
    signature: "صورة التوقيع",
    notice: "* ملاحظة: عند الإرسال، سيتم تحويل هذا التسجيل مباشرة إلى حالة التحقق \"قيد الانتظار\".",
    btnSaving: "جاري حفظ السجلات...",
    btnSave: "حفظ سجل الموظف",
    successMsg: "تم إرسال طلبك بنجاح! يرجى الانتظار للمراجعة، وسيقوم المسؤول بالرد في أقرب وقت ممكن.",
    failedMsg: "فشل",
    validationErr: "حدث خطأ في التحقق من البيانات.",
    serverErr: "حدث خطأ ما في الاتصال بالخادم."
  },
  China: {
    title: "员工注册与申请表",
    subtitle: "请填写与您的合法证件（居留证 Iqama / 护照）相符的信息。",
    personalInfo: "个人信息",
    fullName: "姓名",
    fullNamePlace: "与护照 / 居留证一致",
    email: "电子邮箱",
    emailPlace: "example@mail.com",
    nationality: "国籍",
    nationalityPlace: "国家名称",
    dob: "出生日期",
    identityInfo: "身份与联系方式",
    iqama: "居留证号 (Iqama)",
    iqamaPlace: "2XXXXXXXXX",
    iqamaExpiry: "居留证到期日",
    passport: "护照号码",
    passportPlace: "EXXXXXXXX",
    passportExpiry: "护照到期日",
    mobile: "手机号码",
    mobilePlace: "+966 5X XXX XXXX",
    whatsapp: "WhatsApp 号码",
    jobDetails: "工作经历与证明人",
    position: "职位 / 工种",
    positionPlace: "您的工种名称",
    location: "工作地点",
    experience: "工作经验",
    experiencePlace: "您的经验年份",
    refName: "证明人姓名",
    refNamePlace: "证明人姓名",
    refPhone: "证明人电话",
    refPhonePlace: "证明人手机号",
    docUpload: "文件上传",
    passPhoto: "护照尺寸照片",
    iqamaCopy: "居留证 (Iqama) 复印件",
    passCopy: "护照照片页",
    medical: "医疗报告",
    muqeem: "Muqeem / Absher 控制面板截图",
    insurance: "保险照片",
    ajeer: "Ajeer 文件",
    driving: "驾驶证",
    carInsurance: "汽车保险",
    carFront: "汽车照片（前部）",
    carBack: "汽车照片（后部）",
    istimara: "车辆登记证 (Istimara)",
    signature: "签名图像",
    notice: "* 注意：提交后，此注册将直接进入 \"待处理\" 验证状态。",
    btnSaving: "正在保存记录...",
    btnSave: "保存员工记录",
    successMsg: "您的申请已成功发送！请等待审核，管理员将尽快回复。",
    failedMsg: "失败",
    validationErr: "发生验证错误。",
    serverErr: "服务器连接出现问题。"
  }
};

const ApplicationForm = () => {
  // ল্যাঙ্গুয়েজের জন্য স্টেট (Default English)
  const [lang, setLang] = useState('English');
  const t = translations[lang]; // কারেন্ট ল্যাঙ্গুয়েজের অবজেক্ট সর্টকাট

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    nationality: '',
    dob: '',
    
    iqama_number: '',
    iqama_expiry: '',
    passport_number: '',
    passport_expiry: '',
    mobile: '',
    whatsapp_number: '',
    
    position: '',
    location: '',
    job_experience: '',
    reference_name: '',
    reference_phone: '',
    
    passport_size_photo: null,
    iqama_photo: null,
    passport_photo: null,
    medical_report_photo: null,
    muqeem_photo: null,
    insurance_photo: null,
    ajeer_photo: null,
    driving_license_photo: null,
    car_insurance_photo: null,
    car_photo_one: null,
    car_photo_two: null,
    vihicle_registration: null, 
    signature_photo: null,
    
    company: '',
    department: '',
    joindate: '',
    employee_type: 'Full-Time',
    salary: '',
    status: 'Pending'
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const data = new FormData();

  Object.keys(formData).forEach((key) => {
    if (formData[key] !== null && formData[key] !== '') {
      data.append(key, formData[key]);
    }
  });

  try {
    const response = await api.post('employees', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log("Response Data:", response.data);
    
    // ব্যাকএন্ড থেকে আসা ডাইনামিক সাকসেস মেসেজটি অ্যালার্টে দেখানো হচ্ছে
    alert(response.data.message); 

    // ফর্ম রিসেট
    setFormData({
      full_name: '', email: '', nationality: '', dob: '',
      iqama_number: '', iqama_expiry: '', passport_number: '', passport_expiry: '', mobile: '', whatsapp_number: '',
      position: '', location: '', job_experience: '', reference_name: '', reference_phone: '',
      passport_size_photo: null, iqama_photo: null, passport_photo: null, medical_report_photo: null,
      muqeem_photo: null, insurance_photo: null, ajeer_photo: null, driving_license_photo: null,
      car_insurance_photo: null, car_photo_one: null, car_photo_two: null, vihicle_registration: null, signature_photo: null,
      company: '', department: '', joindate: '', employee_type: 'Full-Time', salary: '', status: 'Pending'
    });

  } catch (error) {
    console.error("API Error Detailed:", error);
    
    if (error.response && error.response.data) {
      const serverData = error.response.data;
      
      // যদি ভ্যালিডেশন এরর হয়, তবে সুনির্দিষ্ট ফিল্ডের ভুলগুলো দেখাবে
      if (serverData.errors) {
        let validationErrors = Object.values(serverData.errors).flat().join("\n");
        alert(`${t.failedMsg || 'Failed'}:\n${validationErrors}`);
      } else {
        // ডাটাবেজ ইনসার্ট বা অন্য কোনো সিস্টেম এরর মেসেজ দেখাবে
        alert(`${t.failedMsg || 'Failed'}: ${serverData.message}`);
      }
    } else {
      // নেটওয়ার্ক বা সার্ভার ডাউন থাকলে
      alert(t.serverErr || "Server connection error.");
    }c
  } finally {
    setLoading(false);
  }
};

  return (
    <div id="application" className="w-full bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-8">
      
      {/* ল্যাঙ্গুয়েজ সিলেক্টর ড্রপডাউন (ডিজাইন ও স্টেট হ্যান্ডেলড) */}
      <div className="flex justify-end">
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value)}
          className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 cursor-pointer"
        >
          <option value="English">🇬🇧 English</option>
          <option value="Bangla">🇧🇩 Bangla</option>
          <option value="Arabic">🇸🇦 Arabic</option>
          <option value="China">🇨🇳 China</option>
        </select>
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] uppercase tracking-tight">
          {t.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#64748b]">
          {t.subtitle}
        </p>
      </div>

      <form className="space-y-6 text-left" onSubmit={handleSubmit}>
        
        {/* === SECTION 1: Personal Information === */}
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider mb-4">{t.personalInfo}</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.fullName} <span className="text-red-500">*</span></label>
              <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder={t.fullNamePlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" required />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.iqama} <span className="text-red-500">*</span> </label>
              <input type="text" name="iqama_number" value={formData.iqama_number} onChange={handleChange} placeholder={t.iqamaPlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.iqamaExpiry}</label>
              <input type="date" name="iqama_expiry" value={formData.iqama_expiry} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.mobile} <span className="text-red-500">*</span></label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder={t.mobilePlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" required />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.email}</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.emailPlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.nationality}</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder={t.nationalityPlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.dob}</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
          </div>
        </div>

        {/* === SECTION 2: Identity & Contact Details === */}
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider mb-4">{t.identityInfo}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            
            
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.passport}</label>
              <input type="text" name="passport_number" value={formData.passport_number} onChange={handleChange} placeholder={t.passportPlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.passportExpiry}</label>
              <input type="date" name="passport_expiry" value={formData.passport_expiry} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.whatsapp}</label>
              <input type="tel" name="whatsapp_number" value={formData.whatsapp_number} onChange={handleChange} placeholder={t.mobilePlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
          </div>
        </div>

        {/* === SECTION 3: Job Experience & References === */}
        <div className="border-b border-slate-100 pb-4">
          <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider mb-4">{t.jobDetails}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.position}</label>
              <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder={t.positionPlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.location}</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="" className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.experience}</label>
              <input type="text" name="job_experience" value={formData.job_experience} onChange={handleChange} placeholder={t.experiencePlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.refName}</label>
              <input type="text" name="reference_name" value={formData.reference_name} onChange={handleChange} placeholder={t.refNamePlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.refPhone}</label>
              <input type="text" name="reference_phone" value={formData.reference_phone} onChange={handleChange} placeholder={t.refPhonePlace} className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-xs sm:text-sm" />
            </div>
          </div>
        </div>

        {/* === SECTION 4: Document Uploads === */}
        <div>
          <h4 className="text-xs font-bold uppercase text-amber-500 tracking-wider mb-4">{t.docUpload}</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.passPhoto} </label>
              <input type="file" name="passport_size_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.iqamaCopy} <span className="text-red-500">*</span></label>
              <input type="file" name="iqama_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.passCopy} </label>
              <input type="file" name="passport_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.medical}</label>
              <input type="file" name="medical_report_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.muqeem}</label>
              <input type="file" name="muqeem_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.insurance}</label>
              <input type="file" name="insurance_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.ajeer}</label>
              <input type="file" name="ajeer_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.driving}</label>
              <input type="file" name="driving_license_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.carInsurance}</label>
              <input type="file" name="car_insurance_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.carFront}</label>
              <input type="file" name="car_photo_one" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.carBack}</label>
              <input type="file" name="car_photo_two" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.istimara}</label>
              <input type="file" name="vihicle_registration" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#475569] mb-2 tracking-wide">{t.signature}</label>
              <input type="file" name="signature_photo" accept="image/*" onChange={handleChange} className="w-full px-3 py-2.5 rounded-lg border border-[#cbd5e1] text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
            </div>
          </div>
        </div>

        {/* Hidden status tracking notice */}
        <div className="text-[11px] text-amber-600 font-semibold bg-amber-50/60 p-3 rounded-lg border border-amber-200/50">
          {t.notice}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-[#0f172a] hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold uppercase tracking-wider text-xs sm:text-sm py-4 rounded-lg transition-colors shadow-md mt-4"
        >
          {loading ? t.btnSaving : t.btnSave}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
