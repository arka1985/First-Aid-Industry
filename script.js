// Comprehensive First Aid Data - All 36 Topics
const titles = {
  en: 'EVIDENCE-BASED GUIDELINES OF FIRST AID FOR COMMON MEDICAL EMERGENCIES AT WORKPLACE',
  hi: 'कार्यस्थल पर सामान्य चिकित्सा आपात स्थितियों के लिए प्रथम चिकित्सा के साक्ष्य-आधारित दिशानिर्देश'
};

const firstAidData = {
  en: [
    { id: 1, title: 'ABDOMINAL INJURY', do: ['Ask for Help', 'Keep person lying down', 'Cover wound with clean cloth', 'Call emergency services', 'Monitor breathing'], dont: ['Give food or water', 'Push organs back', 'Remove embedded objects', 'Apply pressure directly on wound'] },
    { id: 2, title: 'AMPUTATION', do: ['Ask for Help', 'Control bleeding with direct pressure', 'Preserve amputated part in clean bag', 'Keep part cool (not frozen)', 'Get immediate medical help'], dont: ['Place part directly on ice', 'Wash the amputated part', 'Try to reattach yourself', 'Delay emergency call'] },
    { id: 3, title: 'ALTITUDE SICKNESS', do: ['Ask for Help', 'Descend to lower altitude immediately', 'Rest and hydrate', 'Give oxygen if available', 'Seek medical attention'], dont: ['Continue ascending', 'Ignore symptoms', 'Give alcohol', 'Leave person alone'] },
    { id: 4, title: 'ANAPHYLAXIS', do: ['Ask for Help', 'Use EpiPen if available', 'Call 112 immediately', 'Lay person flat', 'Monitor breathing continuously'], dont: ['Give oral medication', 'Make person sit up', 'Delay emergency call', 'Leave person unattended'] },
    { id: 5, title: 'BACKBONE/SPINAL INJURY', do: ['Ask for Help', 'Keep person still', 'Support head and neck', 'Call emergency services', 'Cover with blanket'], dont: ['Move the person', 'Twist or bend spine', 'Remove helmet if present', 'Give food or drink'] },
    { id: 6, title: 'BLEEDING FROM EAR', do: ['Ask for Help', 'Tilt head to bleeding side', 'Cover with sterile pad loosely', 'Seek immediate medical help', 'Keep person calm'], dont: ['Block the ear canal', 'Put anything inside ear', 'Tilt head backward', 'Ignore head injury signs'] },
    { id: 7, title: 'BLEEDING FROM NOSE', do: ['Ask for Help', 'Sit upright, lean forward', 'Pinch soft part of nose', 'Apply cold compress', 'Breathe through mouth'], dont: ['Tilt head backward', 'Lie down flat', 'Pack nose with cotton', 'Blow nose forcefully'] },
    { id: 8, title: 'BLEEDING FROM WOUND', do: ['Ask for Help', 'Apply direct pressure', 'Elevate injured part', 'Use clean cloth/bandage', 'Call for help if severe'], dont: ['Remove embedded objects', 'Use tourniquet unnecessarily', 'Peek at wound repeatedly', 'Apply ice directly'] },
    { id: 9, title: 'BURN', do: ['Ask for Help', 'Cool with running water 10-20 min', 'Cover with clean cloth', 'Remove jewelry before swelling', 'Seek medical help'], dont: ['Apply ice directly', 'Break blisters', 'Use oil/butter/toothpaste', 'Peel off stuck clothing'] },
    { id: 10, title: 'CHEMICAL BURN', do: ['Ask for Help', 'Flush with water 20+ minutes', 'Remove contaminated clothing', 'Cover loosely', 'Call poison control'], dont: ['Try to neutralize chemical', 'Apply ointments', 'Use hot water', 'Rub the area'] },
    { id: 11, title: 'BREATHING DIFFICULTIES', do: ['Ask for Help', 'Help person sit upright', 'Loosen tight clothing', 'Encourage slow breathing', 'Call emergency if severe'], dont: ['Make person lie flat', 'Give food or drink', 'Leave person alone', 'Ignore worsening symptoms'] },
    { id: 12, title: 'CHEST PAIN', do: ['Ask for Help', 'Help person rest', 'Loosen tight clothing', 'Call 112 immediately', 'Give aspirin if no allergy'], dont: ['Ignore the pain', 'Give food or water', 'Allow physical activity', 'Delay emergency call'] },
    { id: 13, title: 'CHOKING', do: ['Ask for Help', 'Encourage coughing', 'Give 5 back blows', 'Perform abdominal thrusts', 'Call 112 if unconscious'], dont: ['Slap on back while upright', 'Put fingers in mouth blindly', 'Give water', 'Stop if person can speak'] },
    { id: 14, title: 'CONVULSION/SEIZURE', do: ['Ask for Help', 'Protect from injury', 'Time the seizure', 'Turn on side after seizure', 'Stay with person'], dont: ['Restrain movements', 'Put anything in mouth', 'Give water during seizure', 'Leave person alone'] },
    { id: 15, title: 'CUT INJURY', do: ['Ask for Help', 'Wash hands first', 'Apply direct pressure', 'Clean with water', 'Cover with sterile dressing'], dont: ['Touch wound with dirty hands', 'Remove embedded objects', 'Use cotton directly', 'Ignore infection signs'] },
    { id: 16, title: 'CPR', do: ['Ask for Help', 'Call 112 first', 'Push hard and fast (100-120/min)', 'Allow full chest recoil', 'Continue until help arrives'], dont: ['Stop compressions unnecessarily', 'Compress too slowly', 'Interrupt for more than 10 sec', 'Give up too early'] },
    { id: 17, title: 'CPR WITH AED', do: ['Ask for Help', 'Turn on AED', 'Follow voice prompts', 'Ensure no one touches patient', 'Resume CPR after shock'], dont: ['Touch patient during analysis', 'Use on wet surface', 'Delay CPR for AED', 'Remove pads between shocks'] },
    { id: 18, title: 'DEHYDRATION', do: ['Ask for Help', 'Give water/ORS slowly', 'Move to cool place', 'Rest in shade', 'Monitor condition'], dont: ['Give large amounts quickly', 'Give alcohol/caffeine', 'Continue physical activity', 'Ignore severe symptoms'] },
    { id: 19, title: 'DOG/ANIMAL BITE', do: ['Ask for Help', 'Wash wound thoroughly', 'Control bleeding', 'Seek medical attention', 'Report to authorities'], dont: ['Ignore minor bites', 'Apply tight bandage', 'Delay rabies consultation', 'Provoke the animal further'] },
    { id: 20, title: 'DROWNING', do: ['Ask for Help', 'Remove from water safely', 'Start CPR if needed', 'Call 112 immediately', 'Keep warm'], dont: ['Attempt rescue without training', 'Try to drain water from lungs', 'Delay CPR', 'Leave person alone'] },
    { id: 21, title: 'EYE INJURY', do: ['Ask for Help', 'Flush with clean water 15+ min', 'Keep eyelids open while flushing', 'Cover with clean pad', 'Seek medical care immediately'], dont: ['Rub the eye', 'Use chemicals', 'Remove embedded objects', 'Delay medical help'] },
    { id: 22, title: 'ELECTRIC SHOCK', do: ['Ask for Help', 'Turn off power source', 'Use non-conductive material', 'Check breathing and pulse', 'Call 112 immediately'], dont: ['Touch victim while energized', 'Use wet materials', 'Move unless necessary', 'Delay calling help'] },
    { id: 23, title: 'FAINTING', do: ['Ask for Help', 'Lay person flat', 'Elevate legs', 'Loosen tight clothing', 'Check breathing'], dont: ['Give food/water immediately', 'Slap or shake person', 'Make person sit up quickly', 'Ignore if happens repeatedly'] },
    { id: 24, title: 'FEVER', do: ['Ask for Help', 'Give fluids', 'Use cool compress', 'Rest in cool room', 'Monitor temperature'], dont: ['Bundle up in blankets', 'Give aspirin to children', 'Ignore high fever', 'Use alcohol rubs'] },
    { id: 25, title: 'FROSTBITE', do: ['Ask for Help', 'Move to warm area', 'Warm gradually with body heat', 'Protect affected area', 'Seek medical help'], dont: ['Rub the area', 'Use direct heat', 'Break blisters', 'Walk on frostbitten feet'] },
    { id: 26, title: 'HEAD INJURY', do: ['Ask for Help', 'Keep person still', 'Apply ice pack', 'Monitor consciousness', 'Call 112 if severe'], dont: ['Move person unnecessarily', 'Give medications', 'Allow to sleep immediately', 'Ignore worsening symptoms'] },
    { id: 27, title: 'HEAT STROKE', do: ['Ask for Help', 'Move to cool place', 'Remove excess clothing', 'Cool body rapidly', 'Call 112'], dont: ['Give alcohol', 'Use ice bath', 'Give medications', 'Leave person alone'] },
    { id: 28, title: 'HYPOGLYCEMIA', do: ['Ask for Help', 'Give sugar/juice if conscious', 'Recheck after 15 minutes', 'Give complex carbs after', 'Monitor closely'], dont: ['Give insulin', 'Give food if unconscious', 'Ignore symptoms', 'Leave person alone'] },
    { id: 29, title: 'POISONING', do: ['Ask for Help', 'Call poison control', 'Keep container/substance', 'Follow expert instructions', 'Monitor breathing'], dont: ['Induce vomiting', 'Give neutralizing agents', 'Wait to see symptoms', 'Give activated charcoal without advice'] },
    { id: 30, title: 'SNAKE BITE', do: ['Ask for Help', 'Keep calm and still', 'Remove jewelry/tight items', 'Mark swelling progression', 'Get to hospital immediately'], dont: ['Apply tourniquet', 'Cut the wound', 'Suck out venom', 'Apply ice'] },
    { id: 31, title: 'STROKE', do: ['Ask for Help', 'Note time of symptoms', 'Call 112 immediately', 'Keep person comfortable', 'Monitor breathing'], dont: ['Give food or drink', 'Give medications', 'Delay emergency call', 'Leave person alone'] },
    { id: 32, title: 'TOXIC CHEMICAL CONTACT', do: ['Ask for Help', 'Remove from exposure', 'Remove contaminated clothing', 'Flush skin with water 20+ min', 'Call poison control'], dont: ['Use neutralizing agents', 'Rub the area', 'Apply ointments', 'Delay decontamination'] },
    { id: 33, title: 'TOXIC GAS INHALATION', do: ['Ask for Help', 'Move to fresh air', 'Loosen tight clothing', 'Monitor breathing', 'Call 112'], dont: ['Enter contaminated area without protection', 'Give anything by mouth', 'Delay evacuation', 'Ignore mild symptoms'] },
    { id: 34, title: 'TRAUMA TO JOINTS/BONE', do: ['Ask for Help', 'Immobilize the area', 'Apply ice pack', 'Elevate if possible', 'Seek medical attention'], dont: ['Try to realign bones', 'Apply heat initially', 'Move injured part', 'Ignore severe pain'] },
    { id: 35, title: 'INSECT BITE/STING', do: ['Ask for Help', 'Remove stinger if present', 'Wash with soap and water', 'Apply cold compress', 'Watch for allergic reaction'], dont: ['Squeeze stinger', 'Apply heat', 'Scratch the area', 'Ignore swelling'] },
    { id: 36, title: 'VERTIGO/DIZZINESS', do: ['Ask for Help', 'Sit or lie down immediately', 'Focus on fixed point', 'Stay hydrated', 'Seek medical help if persistent'], dont: ['Stand up quickly', 'Drive or operate machinery', 'Ignore recurring episodes', 'Close eyes while moving'] }
  ],
  hi: [
    { id: 1, title: 'पेट की चोट', do: ['मदद मांगें', 'व्यक्ति को लेटा कर रखें', 'घाव को साफ कपड़े से ढकें', 'आपातकालीन सेवाओं को बुलाएं', 'सांस की निगरानी करें'], dont: ['खाना या पानी न दें', 'अंगों को वापस न धकेलें', 'धंसी वस्तुओं को न निकालें', 'घाव पर सीधा दबाव न डालें'] },
    { id: 2, title: 'अंग विच्छेदन', do: ['मदद मांगें', 'सीधे दबाव से रक्तस्राव नियंत्रित करें', 'कटे अंग को साफ थैले में रखें', 'अंग को ठंडा रखें (जमे नहीं)', 'तुरंत चिकित्सा सहायता लें'], dont: ['अंग को सीधे बर्फ पर न रखें', 'कटे अंग को न धोएं', 'खुद जोड़ने की कोशिश न करें', 'आपातकालीन कॉल में देरी न करें'] },
    { id: 3, title: 'ऊंचाई की बीमारी', do: ['मदद मांगें', 'तुरंत नीची ऊंचाई पर उतरें', 'आराम करें और पानी पिएं', 'उपलब्ध हो तो ऑक्सीजन दें', 'चिकित्सा सहायता लें'], dont: ['ऊपर चढ़ना जारी न रखें', 'लक्षणों को नज़रअंदाज़ न करें', 'शराब न दें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 4, title: 'एनाफिलेक्सिस', do: ['मदद मांगें', 'उपलब्ध हो तो एपिपेन का उपयोग करें', 'तुरंत 112 पर कॉल करें', 'व्यक्ति को सपाट लिटाएं', 'सांस की लगातार निगरानी करें'], dont: ['मौखिक दवा न दें', 'व्यक्ति को बैठाएं नहीं', 'आपातकालीन कॉल में देरी न करें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 5, title: 'रीढ़ की हड्डी की चोट', do: ['मदद मांगें', 'व्यक्ति को स्थिर रखें', 'सिर और गर्दन को सहारा दें', 'आपातकालीन सेवाओं को बुलाएं', 'कंबल से ढकें'], dont: ['व्यक्ति को न हिलाएं', 'रीढ़ को मोड़ें या घुमाएं नहीं', 'हेलमेट न हटाएं', 'खाना या पीना न दें'] },
    { id: 6, title: 'कान से खून बहना', do: ['मदद मांगें', 'सिर को खून बहने वाली तरफ झुकाएं', 'स्टेराइल पैड से ढीला ढकें', 'तुरंत चिकित्सा सहायता लें', 'व्यक्ति को शांत रखें'], dont: ['कान की नली को ब्लॉक न करें', 'कान के अंदर कुछ न डालें', 'सिर को पीछे न झुकाएं', 'सिर की चोट के संकेतों को नज़रअंदाज़ न करें'] },
    { id: 7, title: 'नाक से खून बहना', do: ['मदद मांगें', 'सीधे बैठें, आगे झुकें', 'नाक के नरम हिस्से को दबाएं', 'ठंडा सेक लगाएं', 'मुंह से सांस लें'], dont: ['सिर को पीछे न झुकाएं', 'सपाट न लेटें', 'नाक में रुई न भरें', 'जोर से नाक न साफ करें'] },
    { id: 8, title: 'घाव से खून बहना', do: ['मदद मांगें', 'सीधा दबाव डालें', 'घायल हिस्से को ऊपर उठाएं', 'साफ कपड़ा/पट्टी का उपयोग करें', 'गंभीर हो तो मदद बुलाएं'], dont: ['धंसी वस्तुओं को न निकालें', 'अनावश्यक टूर्निकेट न लगाएं', 'बार-बार घाव न देखें', 'सीधे बर्फ न लगाएं'] },
    { id: 9, title: 'जलन', do: ['मदद मांगें', '10-20 मिनट बहते पानी से ठंडा करें', 'साफ कपड़े से ढकें', 'सूजन से पहले गहने हटाएं', 'चिकित्सा सहायता लें'], dont: ['सीधे बर्फ न लगाएं', 'ब्लिस्टर न फोड़ें', 'तेल/मक्खन/टूथपेस्ट न लगाएं', 'चिपके कपड़े न उतारें'] },
    { id: 10, title: 'रासायनिक जलन', do: ['मदद मांगें', '20+ मिनट पानी से धोएं', 'दूषित कपड़े हटाएं', 'ढीला ढकें', 'जहर नियंत्रण को कॉल करें'], dont: ['रसायन को बेअसर करने की कोशिश न करें', 'मलहम न लगाएं', 'गर्म पानी का उपयोग न करें', 'क्षेत्र को न रगड़ें'] },
    { id: 11, title: 'सांस लेने में कठिनाई', do: ['मदद मांगें', 'व्यक्ति को सीधा बैठने में मदद करें', 'तंग कपड़े ढीले करें', 'धीमी सांस लेने के लिए प्रोत्साहित करें', 'गंभीर हो तो आपातकालीन कॉल करें'], dont: ['व्यक्ति को सपाट न लिटाएं', 'खाना या पीना न दें', 'व्यक्ति को अकेला न छोड़ें', 'बिगड़ते लक्षणों को नज़रअंदाज़ न करें'] },
    { id: 12, title: 'सीने में दर्द', do: ['मदद मांगें', 'व्यक्ति को आराम करने में मदद करें', 'तंग कपड़े ढीले करें', 'तुरंत 112 पर कॉल करें', 'एलर्जी न हो तो एस्पिरिन दें'], dont: ['दर्द को नज़रअंदाज़ न करें', 'खाना या पानी न दें', 'शारीरिक गतिविधि की अनुमति न दें', 'आपातकालीन कॉल में देरी न करें'] },
    { id: 13, title: 'घुटन', do: ['मदद मांगें', 'खांसने के लिए प्रोत्साहित करें', '5 पीठ पर थपकी दें', 'पेट पर दबाव डालें', 'बेहोश हो तो 112 पर कॉल करें'], dont: ['सीधे खड़े होने पर पीठ पर थपकी न दें', 'मुंह में आंख बंद करके उंगली न डालें', 'पानी न दें', 'बोल सकते हैं तो न रुकें'] },
    { id: 14, title: 'दौरा/मिर्गी', do: ['मदद मांगें', 'चोट से बचाएं', 'दौरे का समय नोट करें', 'दौरे के बाद करवट दिलाएं', 'व्यक्ति के साथ रहें'], dont: ['हरकतों को रोकें नहीं', 'मुंह में कुछ न डालें', 'दौरे के दौरान पानी न दें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 15, title: 'कट की चोट', do: ['मदद मांगें', 'पहले हाथ धोएं', 'सीधा दबाव डालें', 'पानी से साफ करें', 'स्टेराइल ड्रेसिंग से ढकें'], dont: ['गंदे हाथों से घाव न छुएं', 'धंसी वस्तुओं को न निकालें', 'सीधे रुई का उपयोग न करें', 'संक्रमण के संकेतों को नज़रअंदाज़ न करें'] },
    { id: 16, title: 'सीपीआर', do: ['मदद मांगें', 'पहले 112 पर कॉल करें', 'जोर से और तेज दबाएं (100-120/मिनट)', 'पूर्ण छाती रिकॉइल की अनुमति दें', 'मदद आने तक जारी रखें'], dont: ['अनावश्यक रूप से कंप्रेशन न रोकें', 'बहुत धीरे न दबाएं', '10 सेकंड से अधिक न रुकें', 'बहुत जल्दी हार न मानें'] },
    { id: 17, title: 'एईडी के साथ सीपीआर', do: ['मदद मांगें', 'एईडी चालू करें', 'आवाज संकेतों का पालन करें', 'सुनिश्चित करें कि कोई रोगी को न छुए', 'झटके के बाद सीपीआर फिर से शुरू करें'], dont: ['विश्लेषण के दौरान रोगी को न छुएं', 'गीली सतह पर उपयोग न करें', 'एईडी के लिए सीपीआर में देरी न करें', 'झटके के बीच पैड न हटाएं'] },
    { id: 18, title: 'निर्जलीकरण', do: ['मदद मांगें', 'धीरे-धीरे पानी/ओआरएस दें', 'ठंडी जगह पर ले जाएं', 'छाया में आराम करें', 'स्थिति की निगरानी करें'], dont: ['जल्दी बड़ी मात्रा न दें', 'शराब/कैफीन न दें', 'शारीरिक गतिविधि जारी न रखें', 'गंभीर लक्षणों को नज़रअंदाज़ न करें'] },
    { id: 19, title: 'कुत्ते/जानवर का काटना', do: ['मदद मांगें', 'घाव को अच्छी तरह धोएं', 'रक्तस्राव नियंत्रित करें', 'चिकित्सा सहायता लें', 'अधिकारियों को रिपोर्ट करें'], dont: ['मामूली काटने को नज़रअंदाज़ न करें', 'तंग पट्टी न लगाएं', 'रेबीज परामर्श में देरी न करें', 'जानवर को और उकसाएं नहीं'] },
    { id: 20, title: 'डूबना', do: ['मदद मांगें', 'सुरक्षित रूप से पानी से निकालें', 'जरूरत हो तो सीपीआर शुरू करें', 'तुरंत 112 पर कॉल करें', 'गर्म रखें'], dont: ['बिना प्रशिक्षण के बचाव का प्रयास न करें', 'फेफड़ों से पानी निकालने की कोशिश न करें', 'सीपीआर में देरी न करें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 21, title: 'आंख की चोट', do: ['मदद मांगें', '15+ मिनट साफ पानी से धोएं', 'धोते समय पलकें खुली रखें', 'साफ पैड से ढकें', 'तुरंत चिकित्सा सहायता लें'], dont: ['आंख को न रगड़ें', 'रसायनों का उपयोग न करें', 'धंसी वस्तुओं को न निकालें', 'चिकित्सा सहायता में देरी न करें'] },
    { id: 22, title: 'बिजली का झटका', do: ['मदद मांगें', 'बिजली का स्रोत बंद करें', 'गैर-प्रवाहकीय सामग्री का उपयोग करें', 'सांस और नाड़ी की जांच करें', 'तुरंत 112 पर कॉल करें'], dont: ['ऊर्जावान होने पर पीड़ित को न छुएं', 'गीली सामग्री का उपयोग न करें', 'आवश्यक न हो तो न हिलाएं', 'मदद बुलाने में देरी न करें'] },
    { id: 23, title: 'बेहोशी', do: ['मदद मांगें', 'व्यक्ति को सपाट लिटाएं', 'पैर ऊपर उठाएं', 'तंग कपड़े ढीले करें', 'सांस की जांच करें'], dont: ['तुरंत खाना/पानी न दें', 'व्यक्ति को थप्पड़ या हिलाएं नहीं', 'व्यक्ति को जल्दी बैठाएं नहीं', 'बार-बार होने पर नज़रअंदाज़ न करें'] },
    { id: 24, title: 'बुखार', do: ['मदद मांगें', 'तरल पदार्थ दें', 'ठंडा सेक लगाएं', 'ठंडे कमरे में आराम करें', 'तापमान की निगरानी करें'], dont: ['कंबल में न लपेटें', 'बच्चों को एस्पिरिन न दें', 'तेज बुखार को नज़रअंदाज़ न करें', 'अल्कोहल रब का उपयोग न करें'] },
    { id: 25, title: 'शीतदंश', do: ['मदद मांगें', 'गर्म क्षेत्र में ले जाएं', 'शरीर की गर्मी से धीरे-धीरे गर्म करें', 'प्रभावित क्षेत्र की रक्षा करें', 'चिकित्सा सहायता लें'], dont: ['क्षेत्र को न रगड़ें', 'सीधी गर्मी का उपयोग न करें', 'ब्लिस्टर न फोड़ें', 'शीतदंश वाले पैरों पर न चलें'] },
    { id: 26, title: 'सिर की चोट', do: ['मदद मांगें', 'व्यक्ति को स्थिर रखें', 'आइस पैक लगाएं', 'चेतना की निगरानी करें', 'गंभीर हो तो 112 पर कॉल करें'], dont: ['व्यक्ति को अनावश्यक रूप से न हिलाएं', 'दवाएं न दें', 'तुरंत सोने की अनुमति न दें', 'बिगड़ते लक्षणों को नज़रअंदाज़ न करें'] },
    { id: 27, title: 'लू लगना', do: ['मदद मांगें', 'ठंडी जगह पर ले जाएं', 'अतिरिक्त कपड़े हटाएं', 'शरीर को तेजी से ठंडा करें', '112 पर कॉल करें'], dont: ['शराब न दें', 'बर्फ के स्नान का उपयोग न करें', 'दवाएं न दें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 28, title: 'हाइपोग्लाइसीमिया', do: ['मदद मांगें', 'होश में हो तो चीनी/जूस दें', '15 मिनट बाद फिर जांचें', 'बाद में जटिल कार्ब्स दें', 'बारीकी से निगरानी करें'], dont: ['इंसुलिन न दें', 'बेहोश हो तो खाना न दें', 'लक्षणों को नज़रअंदाज़ न करें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 29, title: 'जहर', do: ['मदद मांगें', 'जहर नियंत्रण को कॉल करें', 'कंटेनर/पदार्थ रखें', 'विशेषज्ञ निर्देशों का पालन करें', 'सांस की निगरानी करें'], dont: ['उल्टी न कराएं', 'बेअसर करने वाले एजेंट न दें', 'लक्षण देखने के लिए प्रतीक्षा न करें', 'सलाह के बिना सक्रिय चारकोल न दें'] },
    { id: 30, title: 'सांप का काटना', do: ['मदद मांगें', 'शांत और स्थिर रहें', 'गहने/तंग वस्तुएं हटाएं', 'सूजन की प्रगति चिह्नित करें', 'तुरंत अस्पताल जाएं'], dont: ['टूर्निकेट न लगाएं', 'घाव न काटें', 'जहर न चूसें', 'बर्फ न लगाएं'] },
    { id: 31, title: 'स्ट्रोक', do: ['मदद मांगें', 'लक्षणों का समय नोट करें', 'तुरंत 112 पर कॉल करें', 'व्यक्ति को आरामदायक रखें', 'सांस की निगरानी करें'], dont: ['खाना या पीना न दें', 'दवाएं न दें', 'आपातकालीन कॉल में देरी न करें', 'व्यक्ति को अकेला न छोड़ें'] },
    { id: 32, title: 'विषाक्त रासायनिक संपर्क', do: ['मदद मांगें', 'संपर्क से हटाएं', 'दूषित कपड़े हटाएं', '20+ मिनट त्वचा को पानी से धोएं', 'जहर नियंत्रण को कॉल करें'], dont: ['बेअसर करने वाले एजेंट का उपयोग न करें', 'क्षेत्र को न रगड़ें', 'मलहम न लगाएं', 'विसंदूषण में देरी न करें'] },
    { id: 33, title: 'विषैली गैस साँस लेना', do: ['मदद मांगें', 'ताजी हवा में ले जाएं', 'तंग कपड़े ढीले करें', 'सांस की निगरानी करें', '112 पर कॉल करें'], dont: ['बिना सुरक्षा के दूषित क्षेत्र में प्रवेश न करें', 'मुंह से कुछ न दें', 'निकासी में देरी न करें', 'हल्के लक्षणों को नज़रअंदाज़ न करें'] },
    { id: 34, title: 'जोड़ों/हड्डी में आघात', do: ['मदद मांगें', 'क्षेत्र को स्थिर करें', 'आइस पैक लगाएं', 'संभव हो तो ऊपर उठाएं', 'चिकित्सा सहायता लें'], dont: ['हड्डियों को फिर से संरेखित करने की कोशिश न करें', 'शुरू में गर्मी न लगाएं', 'घायल हिस्से को न हिलाएं', 'गंभीर दर्द को नज़रअंदाज़ न करें'] },
    { id: 35, title: 'कीड़े का काटना/डंक', do: ['मदद मांगें', 'मौजूद हो तो डंक हटाएं', 'साबुन और पानी से धोएं', 'ठंडा सेक लगाएं', 'एलर्जी प्रतिक्रिया देखें'], dont: ['डंक को न निचोड़ें', 'गर्मी न लगाएं', 'क्षेत्र को न खुजलाएं', 'सूजन को नज़रअंदाज़ न करें'] },
    { id: 36, title: 'चक्कर आना', do: ['मदद मांगें', 'तुरंत बैठें या लेटें', 'स्थिर बिंदु पर ध्यान केंद्रित करें', 'हाइड्रेटेड रहें', 'लगातार हो तो चिकित्सा सहायता लें'], dont: ['जल्दी न खड़े हों', 'गाड़ी या मशीनरी न चलाएं', 'बार-बार होने वाले एपिसोड को नज़रअंदाज़ न करें', 'चलते समय आंखें बंद न करें'] }
  ]
};

let currentLang = 'en';
let currentSpeech = null;

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  document.getElementById('langToggle').textContent = currentLang === 'en' ? 'हिन्दी' : 'English';
  document.getElementById('mainTitle').textContent = titles[currentLang];
  document.getElementById('searchInput').placeholder = currentLang === 'en' ? 'Search for first aid topics...' : 'प्राथमिक चिकित्सा विषय खोजें...';
  renderCards();
  renderFooter();
}

function dialEmergency() {
  if (confirm('Dial emergency number 112?')) {
    window.location.href = 'tel:112';
  }
}

function renderCards() {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';
  const data = firstAidData[currentLang];

  data.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${(index % 12) * 0.05}s`;
    card.setAttribute('data-card-id', item.id);

    card.innerHTML = `
      <h2>${item.id}. ${item.title}</h2>
      <h3>${currentLang === 'en' ? 'Do' : 'करें'}</h3>
      <ul>${item.do.map(point => `<li>${point}</li>`).join('')}</ul>
      <h3 class="dont">${currentLang === 'en' ? "Don't" : 'न करें'}</h3>
      <ul class="dont">${item.dont.map(point => `<li>${point}</li>`).join('')}</ul>
      <button class="listen-btn" onclick="speakCard(${item.id})" aria-label="${currentLang === 'en' ? 'Listen to this card' : 'इस कार्ड को सुनें'}">
        🔊 ${currentLang === 'en' ? 'Listen' : 'सुनें'}
      </button>
    `;

    container.appendChild(card);
  });
}

// Text-to-Speech for accessibility
function speakCard(cardId) {
  const data = firstAidData[currentLang];
  const item = data.find(d => d.id === cardId);

  if (!item) return;

  const card = document.querySelector(`[data-card-id="${cardId}"]`);
  const button = card ? card.querySelector('.listen-btn') : null;

  // Stop if clicking the same card that's already speaking (toggle off)
  if (currentSpeech && button && button.classList.contains('speaking')) {
    window.speechSynthesis.cancel();
    currentSpeech = null;
    button.classList.remove('speaking');
    button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    // Remove all highlights
    if (card) {
      card.querySelectorAll('.highlight-speaking').forEach(el => {
        el.classList.remove('highlight-speaking');
      });
    }
    // Clear any pending timeouts
    if (window.highlightTimeouts) {
      window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
      window.highlightTimeouts = [];
    }
    return;
  }

  // Check browser support
  if (!('speechSynthesis' in window)) {
    alert(currentLang === 'en' ? 'Text-to-speech not supported in this browser' : 'इस ब्राउज़र में टेक्स्ट-टू-स्पीच समर्थित नहीं है');
    return;
  }

  // Stop any ongoing speech from other cards
  if (currentSpeech) {
    window.speechSynthesis.cancel();
    // Reset all buttons
    document.querySelectorAll('.listen-btn').forEach(btn => {
      btn.classList.remove('speaking');
      btn.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    });
    // Remove all highlights from all cards
    document.querySelectorAll('.highlight-speaking').forEach(el => {
      el.classList.remove('highlight-speaking');
    });
    // Clear any pending timeouts
    if (window.highlightTimeouts) {
      window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
      window.highlightTimeouts = [];
    }
  }

  // Prepare text segments for tracking
  const doLabel = currentLang === 'en' ? 'What to do' : 'क्या करें';
  const dontLabel = currentLang === 'en' ? 'What not to do' : 'क्या न करें';

  // Build text segments with their corresponding elements
  const segments = [];

  // Title segment
  segments.push({
    text: item.title,
    element: card ? card.querySelector('h2') : null,
    type: 'title'
  });

  // Do label
  segments.push({
    text: doLabel,
    element: card ? card.querySelector('h3:not(.dont)') : null,
    type: 'do-label'
  });

  // Do items
  item.do.forEach((doItem, index) => {
    const doList = card ? card.querySelector('ul:not(.dont)') : null;
    const liElement = doList ? doList.querySelectorAll('li')[index] : null;
    segments.push({
      text: doItem,
      element: liElement,
      type: 'do-item'
    });
  });

  // Don't label
  segments.push({
    text: dontLabel,
    element: card ? card.querySelector('h3.dont') : null,
    type: 'dont-label'
  });

  // Don't items
  item.dont.forEach((dontItem, index) => {
    const dontList = card ? card.querySelector('ul.dont') : null;
    const liElement = dontList ? dontList.querySelectorAll('li')[index] : null;
    segments.push({
      text: dontItem,
      element: liElement,
      type: 'dont-item'
    });
  });

  const textToSpeak = `${item.title}. ${doLabel}: ${item.do.join('. ')}. ${dontLabel}: ${item.dont.join('. ')}.`;

  // Create utterance
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  let currentSegmentIndex = 0;
  let onboundarySupported = false;
  window.highlightTimeouts = [];

  // Time-based highlighting fallback for mobile devices
  // Calculate approximate timing for each segment
  function setupTimeBasedHighlighting() {
    // Optimized speaking rates for mobile sync: ~125 words per minute for English, ~105 for Hindi
    const wordsPerMinute = currentLang === 'en' ? 125 : 105;
    const msPerWord = (60 * 1000) / wordsPerMinute;

    // Adjust for the utterance rate (0.9)
    const adjustedMsPerWord = msPerWord / utterance.rate;

    // Minimal delay to account for mobile speech synthesis startup (50ms)
    let accumulatedTime = 50;

    segments.forEach((segment, index) => {
      // Estimate word count (simple approximation)
      const wordCount = segment.text.split(/\s+/).length;
      const segmentDuration = wordCount * adjustedMsPerWord;

      // Schedule highlight for this segment
      const timeout = setTimeout(() => {
        // Remove highlight from previous segment
        if (index > 0 && segments[index - 1].element) {
          segments[index - 1].element.classList.remove('highlight-speaking');
        }

        // Highlight current segment
        if (segment.element) {
          segment.element.classList.add('highlight-speaking');
        }
      }, accumulatedTime);

      window.highlightTimeouts.push(timeout);
      accumulatedTime += segmentDuration;
    });
  }

  // Try to use onboundary event (works on desktop browsers)
  utterance.onboundary = (event) => {
    onboundarySupported = true;

    if (event.name === 'word') {
      const charIndex = event.charIndex;

      // Find which segment we're currently in
      let accumulatedLength = 0;
      for (let i = 0; i < segments.length; i++) {
        const segmentLength = segments[i].text.length + 2; // +2 for ". " separator

        if (charIndex < accumulatedLength + segmentLength) {
          // Remove highlight from previous segment
          if (currentSegmentIndex !== i && segments[currentSegmentIndex].element) {
            segments[currentSegmentIndex].element.classList.remove('highlight-speaking');
          }

          // Highlight current segment
          if (segments[i].element) {
            segments[i].element.classList.add('highlight-speaking');
          }

          currentSegmentIndex = i;
          break;
        }

        accumulatedLength += segmentLength;
      }
    }
  };

  if (button) {
    button.classList.add('speaking');
    button.textContent = currentLang === 'en' ? '⏸️ Stop' : '⏸️ रोकें';
  }

  // Set up time-based highlighting as fallback
  // Check after a short delay if onboundary is working
  setTimeout(() => {
    if (!onboundarySupported) {
      // onboundary not triggered, use time-based fallback
      setupTimeBasedHighlighting();
    }
  }, 500);

  utterance.onend = () => {
    currentSpeech = null;
    if (button) {
      button.classList.remove('speaking');
      button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    }
    // Remove all highlights
    if (card) {
      card.querySelectorAll('.highlight-speaking').forEach(el => {
        el.classList.remove('highlight-speaking');
      });
    }
    // Clear any pending timeouts
    if (window.highlightTimeouts) {
      window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
      window.highlightTimeouts = [];
    }
  };

  utterance.onerror = () => {
    currentSpeech = null;
    if (button) {
      button.classList.remove('speaking');
      button.textContent = currentLang === 'en' ? '🔊 Listen' : '🔊 सुनें';
    }
    // Remove all highlights
    if (card) {
      card.querySelectorAll('.highlight-speaking').forEach(el => {
        el.classList.remove('highlight-speaking');
      });
    }
    // Clear any pending timeouts
    if (window.highlightTimeouts) {
      window.highlightTimeouts.forEach(timeout => clearTimeout(timeout));
      window.highlightTimeouts = [];
    }
  };

  currentSpeech = utterance;
  window.speechSynthesis.speak(utterance);
}

function renderFooter() {
  const footer = document.getElementById('footerSection');
  if (currentLang === 'en') {
    footer.innerHTML = `
      <div class="disclaimer">
        <h3>DISCLAIMER</h3>
        <p>• The information provided in this guide is for general use and knowledge and does not contain all information that may be relevant to every situation.</p>
        <p>• This information cannot be relied upon as a substitute for seeking guidance from appropriate professionals, such as physicians.</p>
        <p>• While great care has been taken to reflect the most current and accurate information, it does not represent or warrant that the information will be accurate or appropriate at the time of use due to evolving medical research, protocols, regulations and laws.</p>
        <p>• Users are cautioned not to prescribe or administer any medication, including over-the-counter medication, except in instances where permitted by law.</p>
        <p>• This guide is developed for educational purposes with good intention. If any error is identified or any comment/suggestion, please contact the developer immediately at arka.doctor@gmail.com.</p>
        <p>• <strong>IF NOT SURE, DON'T DO ANYTHING - JUST CALL FOR HELP AND GET TO THE HOSPITAL AT THE EARLIEST</strong></p>
      </div>
      <div class="acknowledgement">
        <h3>ACKNOWLEDGEMENT</h3>
        <p>• Ministry of Health and Family Welfare, Govt. of India</p>
        <p>• St. John Ambulance, London, UK</p>
        <p>• The Indian Red Cross Society</p>
        <p>• The American Red Cross</p>
        <p>• University of Michigan Health, Michigan Medicine</p>
      </div>
      <div class="developer">
        <p>Developed by: <strong>Dr. Arkaprabha Sau, MBBS, MD (Gold Medalist), PhD (Computer Science & Engineering), DPH, Dip. Geriatric Medicine, Certificate in Diabetes Managmenet</strong></p>
      </div>
    `;
  } else {
    footer.innerHTML = `
      <div class="disclaimer">
        <h3>अस्वीकरण</h3>
        <p>• इस गाइड में दी गई जानकारी सामान्य उपयोग और ज्ञान के लिए है और इसमें हर स्थिति के लिए प्रासंगिक सभी जानकारी शामिल नहीं है।</p>
        <p>• इस जानकारी को चिकित्सकों जैसे उपयुक्त पेशेवरों से मार्गदर्शन लेने के विकल्प के रूप में नहीं माना जा सकता।</p>
        <p>• जबकि सबसे वर्तमान और सटीक जानकारी को प्रतिबिंबित करने के लिए बहुत सावधानी बरती गई है, यह प्रतिनिधित्व या वारंट नहीं करता है कि विकसित चिकित्सा अनुसंधान, प्रोटोकॉल, नियमों और कानूनों के कारण उपयोग के समय जानकारी सटीक या उपयुक्त होगी।</p>
        <p>• उपयोगकर्ताओं को सावधान किया जाता है कि वे कानून द्वारा अनुमत मामलों को छोड़कर, ओवर-द-काउंटर दवा सहित किसी भी दवा को निर्धारित या प्रशासित न करें।</p>
        <p>• यह गाइड अच्छे इरादे से शैक्षिक उद्देश्यों के लिए विकसित की गई है। यदि कोई त्रुटि पहचानी जाती है या कोई टिप्पणी/सुझाव है, तो कृपया तुरंत डेवलपर से संपर्क करें। arka.doctor@gmail.com</p>
        <p>• <strong>यदि सुनिश्चित नहीं हैं, तो कुछ भी न करें - बस मदद के लिए कॉल करें और जल्द से जल्द अस्पताल पहुंचें</strong></p>
      </div>
      <div class="acknowledgement">
        <h3>आभार</h3>
        <p>• स्वास्थ्य और परिवार कल्याण मंत्रालय, भारत सरकार</p>
        <p>• सेंट जॉन एम्बुलेंस, लंदन, यूके</p>
        <p>• भारतीय रेड क्रॉस सोसायटी</p>
        <p>• अमेरिकन रेड क्रॉस</p>
        <p>• यूनिवर्सिटी ऑफ मिशिगन हेल्थ, मिशिगन मेडिसिन</p>
      </div>
      <div class="developer">
        <p>विकसित: <strong>डॉ. अर्कप्रभ साउ, एमबीबीएस, एमडी (स्वर्ण पदक विजेता), पीएचडी (कंप्यूटर साइंस एवं इंजीनियरिंग), डीपीएच, डिप्लोमा जेरिएट्रिक मेडिसिन, डायबिटीज प्रबंधन में प्रमाणपत्र</strong></p>
      </div>
    `;
  }
}

// Search functionality
function searchCards() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    const doItems = Array.from(card.querySelectorAll('ul:not(.dont) li')).map(li => li.textContent.toLowerCase()).join(' ');
    const dontItems = Array.from(card.querySelectorAll('ul.dont li')).map(li => li.textContent.toLowerCase()).join(' ');

    if (title.includes(searchTerm) || doItems.includes(searchTerm) || dontItems.includes(searchTerm)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Voice search
let recognition;
function startVoiceSearch() {
  const btn = document.getElementById('voiceSearchBtn');

  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert(currentLang === 'en' ? 'Voice search not supported in this browser' : 'इस ब्राउज़र में वॉइस सर्च समर्थित नहीं है');
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = currentLang === 'en' ? 'en-US' : 'hi-IN';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    btn.classList.add('listening');
    btn.textContent = '🎙️';
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('searchInput').value = transcript;
    searchCards();
  };

  recognition.onend = () => {
    btn.classList.remove('listening');
    btn.textContent = '🎤';
  };

  recognition.onerror = (event) => {
    btn.classList.remove('listening');
    btn.textContent = '🎤';
    console.error('Speech recognition error:', event.error);
  };

  recognition.start();
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderFooter();
});
