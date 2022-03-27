import React from "react" 
import GlassCard from "../../GlassCard"
import "./Mercury.css"
import { faMercury } from "@fortawesome/free-solid-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import Hermes from "../../../assets/Images/Hermes.webp"
import {motion} from "framer-motion"
class Mercury extends React.Component{
    
    state ={showing:false}
  render(){
    const { showing } = this.state;
return(
    

    <>

    

<motion.div class="mercury"
 animate={{
   x:[50,27.01511529340699,-20.80734182735712,-49.49962483002227,-32.6821810431806,14.183109273161312,48.0085143325183,37.69511271716523,-7.275001690430677,-45.55651309423385,-41.95357645382262,0.22128489940253926,42.192697936624604,45.37233907250981,6.83686091039168,-37.98439564294107,-47.882974016169236,-13.758166902579847,33.01583541220401,49.43523090933346,20.404103090669597,-27.38646301121342,-49.998041319731854,-26.641651016669876,21.208950366849848,49.56014059317368,32.34596611643202,-14.60694043669181,-48.13029331567833,-37.40287648445002,7.712572494379202,45.737117890226564,41.71116802532551,-0.663837361152974,-42.42851373923026,-45.18461025457533,-6.398184481370234,38.27070259726717,47.75368220236474,13.332146617996862,-33.346903082613096,-49.36696387619132,-19.999265749417564,27.75566507603128,49.99216543238456,26.266099440886485,-21.608897244238914,-49.61677345754644,-32.00721697345998,15.029627187181854,48.248301424605664,37.10770984068913,-8.149539039785274,-45.91413931060595,-41.465491643157506,1.1063378130977868,42.661005386129204,44.993341348459694,5.959006772440964,-38.55401114879226,-47.62064902075782,-12.905081796913374,33.67535811617931,49.29482907912748,19.592861521477502,-28.1226925619086,-49.9823727983175,-25.888489989475254,22.007151124802036,49.66951898611358,31.66596015431499,-15.451136408303533,-48.36252941369412,-36.809635911365795,8.585867091538878,46.087563486237464,41.21656655537789,-1.548751586560823,-42.890154662249394,-44.79854733954816,-5.5193621919523785,38.83429910108156,47.48388489412716,12.477005898666906,-34.00117477936694,-49.21883216970209,-19.184922247487094,28.4875167132656,49.968664184756236,25.508852247083446,-22.40368080645851,-49.71837304641007,-31.322222395516953,15.871435075985083,48.47296833349938,36.508678049740986,-9.021522464554197,-46.25737682982069,-40.964412264572964,1.991044019656945,43.11594361438419,44.60024348940801,5.079285184831067,-39.11154449435579,-47.343400537560626,-12.047952461810072,34.324327545349206,49.13897910206103,18.775479888350606,-28.8501089471476,-49.9510406657324,-25.12721595726926,22.798455222213803,49.76333181085656,30.976030627960494,-16.29049026099821,-48.57960953144011,-36.20485983502368,9.45647102644792,46.423566036953815,40.70904852632809,-2.4331804600076943,-43.33835455259901,-44.39844533459277,-4.638810229883044,39.385725607211725,47.19920695761571,11.617955101482897,-34.644791096008255,-49.0552761324694,-18.364566522734822,29.21044085546447,49.92950362199956,24.743611020171524,-23.191443442593584,-49.80439175705925,-30.62741197480498,16.708269131538035,48.6824446524759,35.898205070523595,-9.89067870021341,-46.586118087176004,-40.450495347679876,2.8751262674562104,43.55737005161717,44.19316868542501,4.197971837092424,-39.65682095832392,-47.051315451457185,-11.187047506779184,34.96254032391876,48.967729818821425,17.952214344555802,-29.568484207216233,-49.90405474092501,-24.358067490167073,23.582614678066932,49.841549668085875,30.276393749349488,-17.12473895579535,-48.78146563976187,-35.58873778178618,10.324111466890557,46.745020244987515,40.188772985548695,-3.3168468167811866,-43.77297295218525,-43.98442962475762,-3.7568045449176615,39.92480930812778,46.89973760597208,10.75526343810706,-35.277550334314995,-48.876347020126566,-17.538455660456535,29.924210950704982,49.87469601635761,23.970615573516096,-23.971938281458634,-49.87480263271776,-29.923003452892903,17.539867104521072,48.87666473527984,35.276482214710306,-10.756735368231048,-46.900260060847515,-39.92390194515161,3.7583075004096633,43.985146362417346,43.77224450671376,3.3153429175855633,-40.18966966048359,-46.74448529686176,-10.322636724543937,35.5897964470413,48.781134895972215,17.12332288727583,-30.27759321573257,-49.84142974847153,-23.58128562599556,24.359383750350293,49.90414804567787,29.567268772579254,-17.95362105358265,-48.96803448044623,-34.96146283364868,11.188516509358925,47.05182537214944,39.655902978395844,-4.199473731128434,-44.19387365911859,-43.5566299554056,-2.8736215423832734,40.451381264321505,46.58557068771162,9.889201261186113,-35.89925419848568,-48.682100905962734,-16.706848549508553,30.62860331578422,49.80425854358608,23.190108150520892,-24.744920729470117,-49.929583607834964,-29.209217579228486,18.365968386512257,49.055567716696345,34.64370431949116,-11.619421061426134,-47.19970430417389,-39.384797082252895,4.640310944793854,44.39913848908746,43.33760286363181,2.4316750269484557,-40.709923615267364,-46.42300622903804,-9.454991006493168,36.205899343496476,48.57925280913499,16.289065276757402,-30.977213750197645,-49.76318531396147,-22.79711379475621,25.128519013071156,49.95110732638368,28.848877925152905,-18.776876797046505,-49.1392575860453,-34.323231567731,12.049415264262931,47.34388527101904,39.11060549711356,-5.08078460303985,-44.60092477039711,-43.11518039155412,-1.9895379965578854,40.96527645724911,46.25680465731291,9.020039979627429,-36.509707857281896,-48.47259866335052,-15.870005801176493,31.323397206317694,49.71821327757068,22.402333348713107,-25.510148547297852,-49.96871751500072,-28.486278041959324,19.18631409165756,49.219097531625245,34.00006968651441,-12.478465429022899,-47.48435697650829,-38.83334970512372,5.520860195983898,44.79921669365518,42.889379965352816,1.547245091414652,-41.217419784083816,-46.086978993965786,-8.584382257788649,36.81065593729228,48.362146824664144,15.449702954906854,-31.667126561636174,-49.669345957847334,-22.005797742338384,25.889779432540667,49.982412793976906,28.12144633833719,-19.594248192075426,-49.29508129819916,-33.674243994673404,12.906537940822366,47.62110841507531,38.55305142850136,-5.960503244930784,-44.993998723242626,-42.660219275861465,-1.104830963934197,41.466333841045135,45.913542544363715,8.14805197354417,-37.108720005085,-48.24790594666935,-15.02818966750416,32.008374885916844,49.616587183409614,21.607538043090756,-26.267381925778636,-49.99219209032535,-27.754411397832886,20.000647137801174,49.36720293265085,33.34578001974211,-13.33359926137404,-47.75412887262635,-38.26973262783461,6.399679305073909,45.1852555985307,42.427716277180906,0.6623302760293945,-41.71199912641098,-45.736508896768754,-7.711083312154714,37.40387670817171,48.12988497982027,14.605498963358759,-32.34711544330535,-49.559941087760336,-21.2075854535068,26.642926442909655,49.998054637865444,27.38520197661022,-20.405479088610967,-49.43545678445144,-33.0147034959568,13.759615931614654,47.88340792737958,37.98341550036124,-6.838353968193942,-45.3729723350767,-42.191889185272565,-0.21977769639488584,41.95439639299148,45.5558919212734,7.273510508896078,-37.69610292184801,-48.00809317073047,-14.181663959108324,32.68332169442383,49.49941210896311,20.805971308756334,-27.016383561068302,-49.99999997728295,-27.013847001197522,20.808712327050646,49.49983750610202,32.68104036223964,-14.184554574326366],
   y:[0,42.073549240394826,45.46487134128409,7.0560004029933605,-37.84012476539641,-47.946213733156924,-13.970774909946293,32.84932993593945,49.46791233116909,20.60592426208783,-27.20105554446849,-49.99951032753518,-26.828645900021748,21.008351841332047,49.53036778474352,32.51439200785584,-14.395165833253266,-48.06987459397784,-37.549362338583805,7.493860483147617,45.64726253638138,41.8327819268028,-0.4425654645201938,-42.311020208758535,-45.27891810033119,-6.617587504888651,38.12792252398014,47.818796420225155,13.545289415393452,-33.181694210648374,-49.401581204643094,-20.201882266153252,27.571334062084528,49.99559300536336,26.454134306001194,-21.40913347480755,-49.58894267215579,-32.17690666784998,14.818428935469266,48.18976931420439,37.25565802396744,-7.931133440235449,-45.82607739578169,-41.588737131429916,0.8850962552706789,42.54517622670592,45.08941738244046,6.1786561372612,-38.41273306618334,-47.68763263797359,-13.118742685196437,33.51145879216874,49.33137960202426,19.79625750909171,-27.939452442580816,-49.98775866793099,-26.077550104345594,21.808237762391247,49.64363240422686,31.836900356956892,-15.240531055110834,-48.30588850041965,-36.95903483246114,8.367785015140345,46.00130190983953,41.34143397450517,-1.3275577011983397,-42.775998948766116,-44.89638403446457,-5.739240689159361,38.69453407789445,47.55273266271873,12.691168138101814,-33.83859784436538,-49.25731302341237,-19.389081770471524,28.305381844909018,49.97600792903656,25.69892279937676,-22.205633435375418,-49.69443269616876,-31.494399713722693,15.661439121654258,48.41822305500927,36.65951600366461,-8.803780997429355,-46.17292235020299,-41.09089183154113,1.769915136683034,43.00347029062266,44.699833180027895,5.299375587557843,-38.973303480790236,-47.41410706349736,-12.262599273382717,34.163085736806046,49.179387271717246,18.980386951376087,-28.669093599521144,-49.96034170931768,-25.31828205548794,22.60128935891753,49.74133956792032,31.149431572117443,-16.081120158126545,-48.52676417687424,-36.35712500404263,9.239087228033373,46.34092527088925,40.83713033181585,-2.212133904253548,-43.227572430530415,-44.49978021834167,-4.859095294660451,39.249019434065524,47.27176670123852,11.833069668214302,-34.484897046769454,-49.09760845220418,-18.57020507190451,29.030559210615714,49.94076123617898,24.935657694819703,-22.995174534479563,-49.784349344458974,-30.802022959432822,16.4995412836891,48.6315033621204,36.05188552508658,-9.673669601923423,-46.50529750933809,-40.58016935683503,2.654179357302912,43.44828781071178,44.29624082299742,4.418434305200072,-39.521660336144436,-47.125722727912546,-11.40261297504306,34.804006561237074,49.01198297201558,18.15856826866295,-29.389750358370325,-49.9172680436959,-24.551079694923466,23.38725810225667,49.82345865608869,30.45220109416462,-16.916669716213825,-48.73243240472473,-35.743821481458234,10.107494070782682,46.6660261874431,40.320029038774315,-3.0960168628028657,-43.66559913873238,-44.08923094073906,-3.977427143736105,39.79120482637276,46.97598658565742,10.971262918950236,-35.12038927886855,-48.92251753966898,-17.745508792246767,29.746638901160427,49.88986397249454,24.16457818641283,-23.77750934359494,-49.85866443870399,-30.099993383880232,17.332472774851514,48.829543397178284,35.43295700911614,-10.540526645674065,-46.823098712560665,-40.05672975890204,3.5376118040172586,43.87948938885579,43.87876679021344,3.5361083619495624,-40.05763178669152,-46.822570005882206,-10.539053295009577,35.43402041196042,48.829219164531466,17.3310590047138,-30.101196877764163,-49.85855116960745,-23.776183450602918,24.165897683398132,49.889963934030014,29.74542742307135,-17.746917882592314,-48.92282873110565,-35.1193164634246,10.97273339970318,46.97650277849657,39.790292145982356,-3.978929583214176,-44.089941803377506,-43.66486486069973,-3.0945125359360364,40.32092034329152,46.665485008348014,10.10601796563956,-35.744875388388216,-48.732095156270496,-16.91525137704889,30.453396509553016,49.82333208830539,23.385925917137946,-24.55239269252315,-49.91735468983859,-29.388530990992027,18.159972568818034,49.01228109786113,34.80292441724557,-11.404080470676393,-47.12622636647013,-39.520737074659074,4.419935624376574,44.29693989393787,43.44754191081746,2.652674263496764,-40.58104986824872,-46.504743900226266,-9.672190857950394,36.05292985353159,48.63115312428122,16.498118486619866,-30.803210202668225,-49.78420948790516,-22.993836161607135,24.936964090164064,49.94083456014041,29.029332049482235,-18.571604471846133,-49.097893489101274,-34.483805659013356,11.834534063753836,47.27225774605584,39.24808566382016,-4.860595375911216,-44.50046744281386,-43.22681496721359,-2.2106281614279832,40.83799998114043,46.34035927513442,9.2376059610859,-36.35815967218245,-48.52640097709027,-16.07969301462519,31.150610550182652,49.741186433553366,22.599944903149172,-25.319581746224546,-49.960401705353135,-28.66785874077713,18.981781341465158,49.17965919733404,34.161985190792535,-12.264060454097143,-47.41458547610244,-38.972359274943166,5.300874313355688,44.70050850418971,43.002701323228486,1.7684088628088024,-41.09175055064199,-46.17234401214934,-8.80229732356057,36.66054093043587,48.417846921736206,15.660007743533495,-31.495570334248068,-49.6942662959863,-22.204283002045493,25.70021568367847,49.9760545924455,28.304139385302207,-19.390471041461474,-49.257571816444255,-33.837488226319174,12.692625989511699,47.553198405629274,38.693579510421586,-5.740737942083301,-44.89704740540624,-42.775218537541036,-1.3260510142877977,41.342281696104074,46.00071127479823,8.366299050591962,-36.960049937563696,-48.30549946312648,-15.239095554515147,31.838062528227578,49.6434527512659,21.80688145730244,-26.07883608091852,-49.98779199505747,-27.938202479454453,19.797641552137033,49.33162524219553,33.51034018902531,-13.120197093083194,-47.688085674699934,-38.41176821187236,6.180151800005645,45.09006874818873,42.54438443279298,0.8835892733685435,-41.589573789110226,-45.82547451002734,-7.929645301428641,37.25666322787063,48.1893674033711,14.81698942486612,-32.178060298813094,-49.58874978049163,-21.40777140422258,26.455413274092663,49.995612993596296,27.57007669336975,-20.203260972818036,-49.401813672708506,-33.18056671004716,13.546740265808275,47.819236715273135,38.126947458424695,-6.6190814602725965,-45.27955740985337,-42.31021709419257,-0.44105830569429383,41.83360745501473,45.64664744714841,7.492370286673909,-37.55035756253272,-48.069459841093035,-14.393722425424304,32.51553700812762,49.530161669488685,21.006984111965345,-26.829917759428184,-49.999516975308545,-27.199790868676615,20.60729752435425,49.468131608915435,32.84819362621698,-13.972222089219102,-47.94664125203066,-37.83913956499016,7.057492533969569,45.46549854449204,42.07273486809763,-0.0015072176679744225,-42.07436357446054,-45.46424409676301,-7.0545082656054925,37.84110993141802,47.94578617071533],
   
   }}
  transition={{
    delay:2,
    duration:10
  }} 
>
    
<div onClick={() => this.setState({ showing: !showing })} ></div>

</motion.div>
{ showing 
                    ? <GlassCard
                    title="Mercury"
            icon={faMercury}
            Xbutton={faXmarkSquare}
            description=" Mercury appears as a morning or evening star. 
             In Classical Greece it was called Apollo when it appeared as a morning star just before sunrise and Hermes, the Greek equivalent of the Roman god Mercury, when it appeared as an evening star just after sunset.
            Hermes was the swift messenger of the gods, and the planet’s name is thus likely a reference to its rapid motions relative to other objects in the sky."
            planetImage={Hermes}
            fact1="Temperature-Day  883°F"
            fact2="Temperature-Night  -297°F"
            fact3="  No Moons"
            fact4= "57,909,227 km (35,983,125 mi)from the Sun"
            fact5="Orbital Period (1 Mercurial Year)is 88 days"
            fact6= "Rotational Period (1 Earth Year) is 58.7 days"/>
                    : null
                }
</>
)
  }
}


export default Mercury 