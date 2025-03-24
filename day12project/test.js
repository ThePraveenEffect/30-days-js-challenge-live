const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");
const backArrow = document.getElementById("backArrow");
const tryAgain = document.getElementById("tryAgain");
const mainContainer = document.getElementById("mainContainer");



const category = {
    Tech : ["NeuroByte", "CyberZen", "AlgoX", "CodeSpire", "TechNova", "AIQuanta", "BitVortex", "QuantumCore", "CyberMorph", "CloudNex", "NexaCode", "SynaptiX", "VirtuBit", "DataFusion", "InfiniTech", "CodePulse", "HyperNexus", "MetaByte", "Tronix", "NovaCore", "CybrixX", "AetherAI", "DeepSync", "GigaNex", "EchoCore", "ByteSynth", "Neuralogic", "TechOrbit", "QuantumEdge", "FutureSync", "HyperBitX", "CloudSynx", "AIStorm", "NextGenX", "CyberFlux", "SmartQuark", "CodeVortex", "AIVian", "QuantumNodeX", "DataSpiral", "MetaSynth", "GlitchTech", "HyperNexX", "NeuroSync", "ByteWave", "AstroCode", "CyberVerse", "NeuralynkX", "SynthoCore", "CodeCrest", "AlphaNeX"
],
    Health: ["VitalEase", "MediCure", "WellNexus", "FitBloom", "PureVitals", "HealSync", "NutriCore", "ZenHealth", "MediBoost", "LifeCrest", "WellSphere", "CareNexa", "HolistiQ", "RevitaCare", "BodyZen", "VitaFuel", "GlowWell", "ThriveX", "PulseCore", "MediSphere", "ZenWell", "FitCrest", "NutriSync", "PureThrive", "HealX", "VivaCare", "MediPulse", "ZenCure", "WellNova", "RejuvaX", "CoreVital", "AuraWell", "LifeZen", "MediGlow", "FitSphere", "WellCrest", "HolistiCore", "ThriveWell", "MediFlow", "NutriZen", "PulseX", "HealHive", "ZenPulse", "WellBoost", "PureMedi", "VitalSync", "NutriEase", "GlowSync", "ThriveCore", "ZenThrive", "VitaSync"
],
    Education: ["EduNexa", "LearnSphere", "SkillCrest", "BrightMind", "KnowledgeX", "EduCore", "ThinkNova", "AcademIQ", "StudyBoost", "ScholarlyX", "WisdomHive", "LearnEase", "SmartEdu", "BrainCrest", "SkillSync", "EduThrive", "MindFuel", "GeniusX", "EdVantage", "ThinkSync", "EduSpark", "SkillNova", "BrightPath", "IQBoost", "AcademX", "StudyWell", "WisdomX", "LearnFlow", "MindElevate", "SkillZen", "EduGlow", "ScholarSync", "BrightIQ", "GeniusCore", "BrainElevate", "ThinkCore", "KnowledgeBoost", "EduElevate", "SkillThrive", "EduNest", "ScholarsHub", "WisdomCore", "MindThrive", "IQNova", "BrightSkill", "EduLoom", "StudyX", "SkillWell", "ThinkEdge", "IQPath", "LearnWise"
],
    Startup:["Startora", "Innovexa", "Launchify", "Venturely", "Stratovate", "Buildora", "Neoventure", "Growthora", "PioneerX", "ScaleNova", "Elevatra", "Boostora", "StriveX", "Creovate", "IdeaForge", "Ignitix", "Ventureon", "Thryvex", "Incepta", "Startique", "Scalevo", "Fundora", "Visionic", "Upthrive", "Risevora", "Initiv", "Accelora", "Thinknovate", "Launchora", "Nextora", "Aspirova", "Creovista", "Innoventis", "Braventure", "Upgenix", "StratifyX", "GoNova", "StartFlow", "Hustlera", "Venturelytic", "Boldify", "Thriveic", "Elevexis", "IdeaQuest", "Pioneura", "Buildexis", "Inceptra", "LaunchNest", "Upliftora", "SparkNexa"
],
    Fashion:["Finovexa", "Wealthora", "MoneyNest", "Investiq", "Capitalyze", "Growvest", "Finthrive", "Fundora", "Profitly", "CashSync", "Financea", "WealthNova", "Bankora", "Credixa", "Investora", "EconoX", "RichVault", "MoneyFlow", "Gainvest", "Finrise", "Payvora", "Fortunex", "FundSync", "Asseta", "Stockora", "Goldence", "Savora", "CapitalEdge", "NetWorthX", "FinWiz", "LedgerX", "ProfitEdge", "GrowFund", "CashEdge", "FinBoost", "SmartWealth", "EconoFlow", "Paywise", "Vesto", "Capitaliq", "Riskora", "InvestNest", "Budgetly", "WealthSync", "MoneyTrack", "FundBoost", "Bankova", "CryptoX", "FortuneHive", "CashElevate"
],
    Finance:["Finovate", "WealthSync", "MoneyNest", "Investora", "CapitalEdge", "Fundora", "CashHive", "ProfitX", "StockRise", "PayNova", "FinThrive", "EconoNest", "Wealthora", "CrediFlow", "GrowVest", "Bankora", "RichVault", "Fortunex", "InvestNest", "MoneyTrack", "FundSync", "CapitalBoost", "FinSphere", "EconoX", "WealthMind", "SmartFunds", "CryptoNest", "Budgetly", "NetWorthX", "Goldence", "PayWise", "WealthElevate", "MoneyBoost", "Stockora", "LedgerX", "TradeNova", "FinMaster", "BankEase", "Cashly", "CryptoHive", "FortuneRise", "ProfitSync", "FinanceFlow", "GrowFund", "RiskShield", "CapitalIQ", "TradeNest", "InvestEase", "MoneyHive", "RichEdge"
]
}


result.style="display: none;"



function nameIdeas(){
    let inputText = document.getElementById("inputIdea").value;
    
    if(inputText === ""){
        error.innerHTML = "please enter category";
        error.style.fontSize= "3.5vh";
        error.style.color="red"
        error.style.fontWeight="bold"
    }
    else if (inputText === "Tech"){
        mainContainer.style="display: none;"
        result.style = "display:block;"
        let txt = "";
        for(let i = 0; i<10; i++){
            let randomIndex = Math.floor(Math.random()* category.Tech.length);
            txt += (i + 1) + ". " + category.Tech[randomIndex] + "<br>";
            
        }
        document.getElementById("generatedName").innerHTML = txt;
    }
    else if (inputText === "Health"){
        mainContainer.style="display: none;"
        result.style = "display:block;"
        let txt = "";
        for(let i = 0; i<10; i++){
            let randomIndex = Math.floor(Math.random()* category.Health.length);
            txt += (i + 1) + ". " + category.Health[randomIndex] + "<br>";
            
        }
        document.getElementById("generatedName").innerHTML = txt;
    }
    else if (inputText === "Finance"){
        mainContainer.style="display: none;"
        result.style = "display:block;"
        let txt = "";
        for(let i = 0; i<10; i++){
            let randomIndex = Math.floor(Math.random()* category.Finance.length);
            txt += (i + 1) + ". " + category.Finance[randomIndex] + "<br>";
            
        }
        document.getElementById("generatedName").innerHTML = txt;
    }
    else if (inputText === "Education"){
        mainContainer.style="display: none;"
        result.style = "display:block;"
        let txt = "";
        for(let i = 0; i<10; i++){
            let randomIndex = Math.floor(Math.random()* category.Education.length);
            txt += (i + 1) + ". " + category.Education[randomIndex] + "<br>";
            
        }
        document.getElementById("generatedName").innerHTML = txt;
    }
    else if (inputText === "Startup"){
        mainContainer.style="display: none;"
        result.style = "display:block;"
        let txt = "";
        for(let i = 0; i<10; i++){
            let randomIndex = Math.floor(Math.random()* category.Startup.length);
            txt += (i + 1) + ". " + category.Startup[randomIndex] + "<br>";
            
        }
        document.getElementById("generatedName").innerHTML = txt;
    }
    

};

document.getElementById("generateBtn").addEventListener("click", nameIdeas);


function back(){
    result.style="diplay:none;"
    mainContainer.style = "display: block;"
}

result.style= "margin : auto;"

backArrow.addEventListener("click", back);
tryAgain.addEventListener("click",back);




