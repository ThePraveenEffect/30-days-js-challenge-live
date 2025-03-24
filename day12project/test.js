const inputIdea = document.getElementById("inputIdea");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");
const backArrow = document.getElementById("backArrow");
const tryAgain = document.getElementById("tryAgain");
const mainContainer = document.getElementById("mainContainer");



const category = {
    tech : ["NextGen Tech Solutions", "Cyber Innovation Hub", "AI Future Labs", "Quantum Tech Empire", "SmartVision Technologies", "CloudBoost Systems", "NeoByte Software", "FutureCode Solutions", "AI Genius Hub", "RoboMind Tech", "HyperLoop Technologies", "Quantum AI Creations", "CyberShield Systems", "AlphaTech Innovators", "SmartBot Creations", "Visionary AI Labs", "CloudNext Technologies", "FutureAI Enterprises", "NeuralTech Solutions", "TechWave Innovations", "SecureNet Systems", "AI Hub Experts", "Quantum Edge Tech", "HyperSync Technologies", "AI Revolution Labs", "CodeCrafters Hub", "AI Prime Innovations", "NextLevel Cyber Solutions", "SmartAI Global", "FutureByte Solutions", "DigitalGen Tech", "AI Power Systems", "CodeVision Technologies", "CyberElite Innovations", "VirtualMind AI", "QuantumBits Technologies", "TechSavvy Solutions", "SmartWorld AI", "CloudMinds Systems", "AI Bot Creations", "NeuralByte Tech", "AI Infinity Solutions", "UltraCode Systems", "Digital Brain AI", "FutureScope Tech", "CyberX Solutions", "AI Prodigy Hub", "CodeGenius Hub", "AI Visionary Systems", "CyberBrains Tech", "RoboCode Innovations", "HyperAI Solutions", "AI Synergy Hub", "SmartBot Technologies", "AI Core Systems", "FutureShield Tech", "DigitalSynapse AI", "CloudWave Innovations", "AI NeuralMinds", "QuantumSphere Tech", "CyberMind Labs", "AI Bot Intelligence", "TechSavants Solutions", "AI Spark Innovations", "SmartGrid Technologies", "CodeX AI Systems", "FutureLogic Tech", "HyperByte Innovations", "AI Velocity Hub", "NeuralLink Solutions", "SmartCloud Tech", "AI RoboWorld", "QuantumTech Experts", "CodeGenius AI", "CyberSec Solutions", "AI FutureSync", "DigitalWave Technologies", "AI Infinity Hub", "SmartGenius Tech", "AI HyperMind", "QuantumCloud Solutions", "AI UltraX Systems"
],
    health: ["VitalEase", "MediCure", "WellNexus", "FitBloom", "PureVitals", "HealSync", "NutriCore", "ZenHealth", "MediBoost", "LifeCrest", "WellSphere", "CareNexa", "HolistiQ", "RevitaCare", "BodyZen", "VitaFuel", "GlowWell", "ThriveX", "PulseCore", "MediSphere", "ZenWell", "FitCrest", "NutriSync", "PureThrive", "HealX", "VivaCare", "MediPulse", "ZenCure", "WellNova", "RejuvaX", "CoreVital", "AuraWell", "LifeZen", "MediGlow", "FitSphere", "WellCrest", "HolistiCore", "ThriveWell", "MediFlow", "NutriZen", "PulseX", "HealHive", "ZenPulse", "WellBoost", "PureMedi", "VitalSync", "NutriEase", "GlowSync", "ThriveCore", "ZenThrive", "VitaSync"
],
    education: ["EduNexa", "LearnSphere", "SkillCrest", "BrightMind", "KnowledgeX", "EduCore", "ThinkNova", "AcademIQ", "StudyBoost", "ScholarlyX", "WisdomHive", "LearnEase", "SmartEdu", "BrainCrest", "SkillSync", "EduThrive", "MindFuel", "GeniusX", "EdVantage", "ThinkSync", "EduSpark", "SkillNova", "BrightPath", "IQBoost", "AcademX", "StudyWell", "WisdomX", "LearnFlow", "MindElevate", "SkillZen", "EduGlow", "ScholarSync", "BrightIQ", "GeniusCore", "BrainElevate", "ThinkCore", "KnowledgeBoost", "EduElevate", "SkillThrive", "EduNest", "ScholarsHub", "WisdomCore", "MindThrive", "IQNova", "BrightSkill", "EduLoom", "StudyX", "SkillWell", "ThinkEdge", "IQPath", "LearnWise"
],
    startup:["Startora", "Innovexa", "Launchify", "Venturely", "Stratovate", "Buildora", "Neoventure", "Growthora", "PioneerX", "ScaleNova", "Elevatra", "Boostora", "StriveX", "Creovate", "IdeaForge", "Ignitix", "Ventureon", "Thryvex", "Incepta", "Startique", "Scalevo", "Fundora", "Visionic", "Upthrive", "Risevora", "Initiv", "Accelora", "Thinknovate", "Launchora", "Nextora", "Aspirova", "Creovista", "Innoventis", "Braventure", "Upgenix", "StratifyX", "GoNova", "StartFlow", "Hustlera", "Venturelytic", "Boldify", "Thriveic", "Elevexis", "IdeaQuest", "Pioneura", "Buildexis", "Inceptra", "LaunchNest", "Upliftora", "SparkNexa"
],
    fashion:["Finovexa", "Wealthora", "MoneyNest", "Investiq", "Capitalyze", "Growvest", "Finthrive", "Fundora", "Profitly", "CashSync", "Financea", "WealthNova", "Bankora", "Credixa", "Investora", "EconoX", "RichVault", "MoneyFlow", "Gainvest", "Finrise", "Payvora", "Fortunex", "FundSync", "Asseta", "Stockora", "Goldence", "Savora", "CapitalEdge", "NetWorthX", "FinWiz", "LedgerX", "ProfitEdge", "GrowFund", "CashEdge", "FinBoost", "SmartWealth", "EconoFlow", "Paywise", "Vesto", "Capitaliq", "Riskora", "InvestNest", "Budgetly", "WealthSync", "MoneyTrack", "FundBoost", "Bankova", "CryptoX", "FortuneHive", "CashElevate"
],
    finance:["Finovate", "WealthSync", "MoneyNest", "Investora", "CapitalEdge", "Fundora", "CashHive", "ProfitX", "StockRise", "PayNova", "FinThrive", "EconoNest", "Wealthora", "CrediFlow", "GrowVest", "Bankora", "RichVault", "Fortunex", "InvestNest", "MoneyTrack", "FundSync", "CapitalBoost", "FinSphere", "EconoX", "WealthMind", "SmartFunds", "CryptoNest", "Budgetly", "NetWorthX", "Goldence", "PayWise", "WealthElevate", "MoneyBoost", "Stockora", "LedgerX", "TradeNova", "FinMaster", "BankEase", "Cashly", "CryptoHive", "FortuneRise", "ProfitSync", "FinanceFlow", "GrowFund", "RiskShield", "CapitalIQ", "TradeNest", "InvestEase", "MoneyHive", "RichEdge"
]
}


result.style="display: none;"



if(inputIdea === ""){
    error.innerHTML="please enter category"
    error.style="fontSize: 2vh;"
}
else if (inputIdea === "tech"){
    mainContainer.style="display: none;"
    result.style = "display:block;"
    let txt = "";
    for(let i = 0; i<10; i++){
        let randomIndex = Math.floor(Math.random()* category.tech.length);
        txt += (i + 1 );
        category.tech[randomIndex];

        

    }
}

