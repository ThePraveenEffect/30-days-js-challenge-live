const quotes = [
  "सपने वो नहीं जो हम सोते समय देखते हैं, सपने वो हैं जो हमें सोने नहीं देते। - Dr. APJ Abdul Kalam",
  "अगर जिंदगी में कुछ बड़ा करना है तो अपने तरीके बदलो, इरादे नहीं।",
  "हर सुबह एक नया मौका है, अपनी किस्मत बदलने का।",
  "किसी काम में असफल होना, अंत नहीं है; बल्कि यह सफलता के और करीब होने का संकेत है।",
  "बड़े सपने देखने वालों के सपने ही सच होते हैं।",
  "हार मत मानो, क्योंकि महान चीजें समय लेती हैं।",
  "जो लोग रिस्क लेने की हिम्मत नहीं रखते, वे कभी जीत भी नहीं सकते।",
  "खुद को इतना मजबूत बनाओ कि कोई भी चीज तुम्हें तोड़ न सके।",
  "आपका समय सीमित है, इसे किसी और की जिंदगी जीने में बर्बाद मत करो। - Steve Jobs",
  "इंतजार करने वालों को सिर्फ उतना ही मिलता है, जितना कोशिश करने वाले छोड़ देते हैं।",
  "जिंदगी की असली खूबसूरती यह नहीं कि आपने कितने साल जिए, बल्कि यह है कि आपने इन सालों में कितना जिया।",
  "खुद को दूसरों से बेहतर बनाओ, दूसरों से बेहतर दिखने की कोशिश मत करो।",
  "अगर कोई तुम्हें गिराने की कोशिश कर रहा है, तो इसका मतलब तुम उनसे ऊपर हो।",
  "बदलाव से डरिए मत, क्योंकि यह नया रास्ता दिखाने आता है।",
  "जिंदगी आसान नहीं होती, इसे आसान बनाना पड़ता है मेहनत से और प्यार से।",
  "जो चीजें तुम्हें चैलेंज करती हैं, वही तुम्हें बदलती हैं।",
  "अगर आप सोचते हैं कि आप कर सकते हैं, तो आप कर सकते हैं। अगर आप सोचते हैं कि आप नहीं कर सकते, तो आप सही हैं। - Henry Ford",
  "डर को अपने अंदर मत बसने दो, वरना जिंदगी भर पछताना पड़ेगा।",
  "जिंदगी को ऐसे जियो जैसे कि हर दिन आखिरी हो।",
  "शिकायत करने से अच्छा है, खुद को इतना काबिल बनाओ कि तुम्हें शिकायत का मौका ही न मिले।",
  "सच्चा प्यार वही है जो बिना किसी शर्त के हो।",
  "रिश्ते शब्दों से नहीं, भरोसे से मजबूत होते हैं।",
  "जिसे तुम सच में चाहते हो, अगर वो तुम्हारा हो गया तो समझो तुम सबसे ज्यादा अमीर इंसान हो।",
  "हर रिश्ता मजबूत बन सकता है, बस उसमें थोड़ा प्यार और थोड़ा समझौता होना चाहिए।",
  "अगर कोई आपके लिए वक्त नहीं निकालता, तो समझ जाइए कि वह आपके लिए अहम नहीं है।",
  "प्यार तब खूबसूरत होता है जब वह दिल से किया जाए, न कि मतलब के लिए।",
  "रिश्तों में सिर्फ प्यार ही नहीं, इज्जत भी जरूरी होती है।",
  "अगर कोई आपको सच्चे दिल से चाहता है, तो वह आपको कभी खोने नहीं देगा।",
  "जिसे तुम प्यार करते हो, उसकी खुशी में अपनी खुशी ढूंढो।",
  "प्यार सिर्फ कहने से नहीं, निभाने से साबित होता है।",
  "आज की मेहनत ही कल की सफलता की चाबी है।",
  "सिर्फ सोचने से कुछ नहीं होता, मेहनत करनी पड़ती है।",
  "अगर तुम खुद पर मेहनत नहीं करोगे, तो कोई और तुम्हें इस्तेमाल करेगा।",
  "जो लोग खुद की मदद नहीं करते, उनकी मदद किस्मत भी नहीं करती।",
  "सफलता उन्हीं को मिलती है जो अपने लक्ष्य के लिए पागल होते हैं।",
  "कोशिश करते रहो, जब तक तुम्हारी जीत की गूंज दुनिया न सुन ले।",
  "जो मेहनत से भागता है, वो जिंदगी से भी हार जाता है।",
  "दुनिया तुम्हें तब तक नहीं पहचानती, जब तक तुम खुद को साबित नहीं कर देते।",
  "जो लोग कड़ी मेहनत से नहीं डरते, उनके सपने कभी अधूरे नहीं रहते।",
  "हर सफलता की शुरुआत एक छोटे कदम से होती है।",
];
const button = document.getElementById("btnChange");

let txt = "";

function randomQuotes() {
  randomQuotes = Math.floor(Math.random() * quotes.length);
  txt = quotes[randomQuotes];
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = txt;
  quoteElement.style.fontSize = "20px";
  quoteElement.style.color = "black";
  quoteElement.style.fontFamily = "merriweather sans", sans - serif, serif;
}

button.addEventListener("click", randomQuotes);
