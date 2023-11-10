/*********************************
* 
* Fancy Fonts Generator/Converter 
* Written by Alan.
* Written on 06-08-2021
*
/*********************************/

/* String Extensions */

var _fontFiles = [
  {
    fontName: "Bubbles",
    fontLower: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    fontUpper: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    fontDigits: "⓪①②③④⑤⑥⑦⑧⑨",
  },
  {
    fontName: "BubbleBlack",
    fontLower: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    fontUpper: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    fontDigits: "⓿➊➋➌➍➎➏➐➑➒",
  },
  {
    fontName: "Parenthesis",
    fontLower: "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵",
    fontUpper: "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵",
    fontDigits: "0⑴⑵⑶⑷⑸⑹⑺⑻⑼",
  },
  {
    fontName: "SuperScript",
    fontLower: "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ",
    fontUpper: "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ",
    fontDigits: "⁰¹²³⁴⁵⁶⁷⁸⁹",
  },
  {
    fontName: "FullWidth",
    fontLower: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
    fontUpper: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
    fontDigits: "０１２３４５６７８９",
  },
  {
    fontName: "MathBold",
    fontLower: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
    fontUpper: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    fontDigits: "",
  },
  {
    fontName: "MathItalic",
    fontLower: "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛",
    fontUpper: "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁",
    fontDigits: "",
  },
  {
    fontName: "MathSans",
    fontLower: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓",
    fontUpper: "𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹",
    fontDigits: "",
  },
  {
    fontName: "MathSansItalic",
    fontLower: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
    fontUpper: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡",
    fontDigits: "",
  },
  {
    fontName: "MathSansBold",
    fontLower: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    fontUpper: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭",
    fontDigits: "",
  },
  {
    fontName: "MathSansBoldItalic",
    fontLower: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
    fontUpper: "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕",
    fontDigits: "",
  },
  {
    fontName: "Fraktur",
    fontLower: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
    fontUpper: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
    fontDigits: "",
  },
  {
    fontName: "FrakturBold",
    fontLower: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",
    fontUpper: "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅",
    fontDigits: "",
  },
  {
    fontName: "Russian",
    fontLower: "абcдёfgнїjкгѫпѳpфя$тцѵщжчз",
    fontUpper: "АБCДЄFGHЇJКГѪЙѲPФЯ$TЦѴШЖЧЗ",
    fontDigits: "",
  },
  {
    fontName: "Japanese",
    fontLower: "卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙",
    fontUpper: "卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙",
    fontDigits: "",
  },
  {
    fontName: "Arabic",
    fontLower: "ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz",
    fontUpper: "ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz",
    fontDigits: "",
  },
  {
    fontName: "Fairy",
    fontLower: "ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ",
    fontUpper: "ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ",
    fontDigits: "",
  },
  {
    fontName: "Wizard",
    fontLower: "ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ",
    fontUpper: "ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ",
    fontDigits: "",
  },
  {
    fontName: "Monospace",
    fontLower: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
    fontUpper: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
    fontDigits: "",
  },
  {
    fontName: "Script",
    fontLower: "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    fontUpper: "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
    fontDigits: "",
  },
  {
    fontName: "ScriptBold",
    fontLower: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
    fontUpper: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
    fontDigits: "",
  },
  {
    fontName: "DoubleStruck",
    fontLower: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
    fontUpper: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    fontDigits: "",
  },
  {
    fontName: "Squared",
    fontLower: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    fontUpper: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    fontDigits: "",
  },
  {
    fontName: "Funky",
    fontLower: "αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz",
    fontUpper: "αв¢∂єƒgнιנкℓмησρqяѕтυνωχуz",
    fontDigits: "",
  },
  {
    fontName: "Acute",
    fontLower: "ábćdéfǵhíjḱĺḿńőṕqŕśtúvẃxӳź",
    fontUpper: "ÁBĆDÉFǴHíJḰĹḾŃŐṔQŔśTŰVẂXӲŹ",
    fontDigits: "",
  },
  {
    fontName: "RockDots",
    fontLower: "äḅċḋëḟġḧïjḳḷṁṅöṗqṛṡẗüṿẅẍÿż",
    fontUpper: "ÄḄĊḊЁḞĠḦЇJḲḶṀṄÖṖQṚṠṪÜṾẄẌŸŻ",
    fontDigits: "",
  },
  {
    fontName: "Stroked",
    fontLower: "Ⱥƀȼđɇfǥħɨɉꝁłmnøᵽꝗɍsŧᵾvwxɏƶ",
    fontUpper: "ȺɃȻĐɆFǤĦƗɈꝀŁMNØⱣꝖɌSŦᵾVWXɎƵ",
    fontDigits: "",
  },
  {
    fontName: "Inverted",
    fontLower: "ɐqɔpǝɟƃɥıɾʞןɯuodbɹsʇnʌʍxʎz",
    fontUpper: "∀ᗺƆᗡƎℲ⅁HIſꓘ˥WNOԀტᴚS⊥∩ΛMX⅄Z",
    fontDigits: "0ƖᘔƐ߈95ㄥ86",
  },
  {
    fontName: "1337 [extreme]",
    fontLower: [
      "@",
      "8",
      "(",
      "|)",
      "3",
      "/=",
      "6",
      "#",
      "!",
      "_|",
      "|<",
      "|_",
      "/V\\",
      "/\\/",
      "0",
      "|*",
      "Q",
      "?",
      "5",
      "7",
      "(_)",
      "\\/",
      "vv",
      "><",
      "Y",
      "2",
    ],
    fontUpper: [
      "@",
      "8",
      "(",
      "|)",
      "3",
      "/=",
      "6",
      "#",
      "!",
      "_|",
      "|<",
      "|_",
      "/V\\",
      "/\\/",
      "0",
      "|*",
      "Q",
      "?",
      "5",
      "7",
      "(_)",
      "\\/",
      "vv",
      "><",
      "Y",
      "2",
    ],
    fontDigits: "",
  },
  {
    fontName: "Heavy",
    fontLower: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
    fontUpper: "ΛＢＣＤΞＦＧＨＩＪＫＬＭＮ♢ＰＱＲＳＴＵＶＷＸＹＺ",
    fontDigits: "０１２３４５６７８９",
  },
  {
    fontName: "Little Fancy",
    fontLower: "αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ",
    fontUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    fontDigits: "0123456789",
  },
  {
    fontName: "Fable",
    fontLower: "ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ",
    fontUpper: "ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ",
    fontDigits: "0123456789",
  },
  {
    fontName: "Swirls",
    fontLower: "ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ",
    fontUpper: "ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ",
    fontDigits: "0123456789",
  },
  {
    fontName: "Accent",
    fontLower: "åß¢Ðê£ghïjklmñðþqr§†µvwx¥z",
    fontUpper: "ÄßÇÐÈ£GHÌJKLMñÖþQR§†ÚVWX¥Z",
    fontDigits: "0123456789",
  },
  {
    fontName: "Linear",
    fontLower: "ΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ",
    fontUpper: "ΛBᄃDΣFGΉIJKᄂMПӨPQЯƧƬЦVЩXYZ",
    fontDigits: "0123456789",
  },
  {
    fontName: "Scribbles",
    fontLower: "₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ",
    fontUpper: "₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ",
    fontDigits: "0123456789",
  },
  {
    fontName: "Japanese Script",
    fontLower: "ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙",
    fontUpper: "ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙",
    fontDigits: "0123456789",
  },
  {
    fontName: "Solitude",
    fontLower: [
      "【a】",
      "【b】",
      "【c】",
      "【d】",
      "【e】",
      "【f】",
      "【g】",
      "【h】",
      "【i】",
      "【j】",
      "【k】",
      "【l】",
      "【m】",
      "【n】",
      "【o】",
      "【p】",
      "【q】",
      "【r】",
      "【s】",
      "【t】",
      "【u】",
      "【v】",
      "【w】",
      "【x】",
      "【y】",
      "【z】",
    ],
    fontUpper: [
      "【A】",
      "【B】",
      "【C】",
      "【D】",
      "【E】",
      "【F】",
      "【G】",
      "【H】",
      "【I】",
      "【J】",
      "【K】",
      "【L】",
      "【M】",
      "【N】",
      "【O】",
      "【P】",
      "【Q】",
      "【R】",
      "【S】",
      "【T】",
      "【U】",
      "【V】",
      "【W】",
      "【X】",
      "【Y】",
      "【Z】",
    ],
    fontDigits: [
      "【0】",
      "【1】",
      "【2】",
      "【3】",
      "【4】",
      "【5】",
      "【6】",
      "【7】",
      "【8】",
      "【9】",
    ],
  },
  {
    fontName: "Brackets",
    fontLower: [
      "『a』",
      "『b』",
      "『c』",
      "『d』",
      "『e』",
      "『f』",
      "『g』",
      "『h』",
      "『i』",
      "『j』",
      "『k』",
      "『l』",
      "『m』",
      "『n』",
      "『o』",
      "『p』",
      "『q』",
      "『r』",
      "『s』",
      "『t』",
      "『u』",
      "『v』",
      "『w』",
      "『x』",
      "『y』",
      "『z』",
    ],
    fontUpper: [
      "『A』",
      "『B』",
      "『C』",
      "『D』",
      "『E』",
      "『F』",
      "『G』",
      "『H』",
      "『I』",
      "『J』",
      "『K』",
      "『L』",
      "『M』",
      "『N』",
      "『O』",
      "『P』",
      "『Q』",
      "『R』",
      "『S』",
      "『T』",
      "『U』",
      "『V』",
      "『W』",
      "『X』",
      "『Y』",
      "『Z』",
    ],
    fontDigits: [
      "『0』','『1』",
      "『2』",
      "『3』",
      "『4』",
      "『5』",
      "『6』",
      "『7』",
      "『8』",
      "『9』",
    ],
  },
  {
    fontName: "Box Lines",
    fontLower: [
      "[̲̅a]",
      "[̲̅b]",
      "[̲̅c]",
      "[̲̅d]",
      "[̲̅e]",
      "[̲̅f]",
      "[̲̅g]",
      "[̲̅h]",
      "[̲̅i]",
      "[̲̅j]",
      "[̲̅k]",
      "[̲̅l]",
      "[̲̅m]",
      "[̲̅n]",
      "[̲̅o]",
      "[̲̅p]",
      "[̲̅q]",
      "[̲̅r]",
      "[̲̅s]",
      "[̲̅t]",
      "[̲̅u]",
      "[̲̅v]",
      "[̲̅w]",
      "[̲̅x]",
      "[̲̅y]",
      "[̲̅z]",
    ],
    fontUpper: [
      "[̲̅A]",
      "[̲̅B]",
      "[̲̅C]",
      "[̲̅D]",
      "[̲̅E]",
      "[̲̅F]",
      "[̲̅G]",
      "[̲̅H]",
      "[̲̅I]",
      "[̲̅J]",
      "[̲̅K]",
      "[̲̅L]",
      "[̲̅M]",
      "[̲̅N]",
      "[̲̅O]",
      "[̲̅P]",
      "[̲̅Q]",
      "[̲̅R]",
      "[̲̅S]",
      "[̲̅T]",
      "[̲̅U]",
      "[̲̅V]",
      "[̲̅W]",
      "[̲̅X]",
      "[̲̅Y]",
      "[̲̅Z]",
    ],
    fontDigits: [
      "̲̅[0]",
      "[̲̅1]",
      "[̲̅2]",
      "[̲̅3]",
      "[̲̅4]",
      "[̲̅5]",
      "[̲̅6]",
      "[̲̅7]",
      "[̲̅8]",
      "[̲̅9]",
    ],
  },
  {
    fontName: "Symbolic",
    fontLower: [
      "ą",
      "ҍ",
      "ç",
      "ժ",
      "ҽ",
      "ƒ",
      "ց",
      "հ",
      "ì",
      "ʝ",
      "ҟ",
      "Ӏ",
      "ʍ",
      "ղ",
      "օ",
      "ք",
      "զ",
      "ɾ",
      "ʂ",
      "է",
      "մ",
      "ѵ",
      "ա",
      "×",
      "վ",
      "Հ",
    ],
    fontUpper: [
      "Ⱥ",
      "β",
      "↻",
      "Ꭰ",
      "Ɛ",
      "Ƒ",
      "Ɠ",
      "Ƕ",
      "į",
      "ل",
      "Ҡ",
      "Ꝉ",
      "Ɱ",
      "ហ",
      "ට",
      "φ",
      "Ҩ",
      "འ",
      "Ϛ",
      "Ͳ",
      "Ա",
      "Ỽ",
      "చ",
      "ჯ",
      "Ӌ",
      "ɀ",
    ],
    fontDigits: ["⊘", "𝟙", "ϩ", "Ӡ", "५", "Ƽ", "Ϭ", "7", "𝟠", "९"],
  },
  {
    fontName: "Bent",
    fontLower: [
      "ᗩ",
      "ᗷ",
      "ᑢ",
      "ᕲ",
      "ᘿ",
      "ᖴ",
      "ᘜ",
      "ᕼ",
      "ᓰ",
      "ᒚ",
      "ᐸ",
      "ᒪ",
      "ᘻ",
      "ᘉ",
      "ᓍ",
      "ᕵ",
      "ᕴ",
      "ᖇ",
      "S",
      "ᖶ",
      "ᑘ",
      "ᐺ",
      "ᘺ",
      "᙭",
      "ᖻ",
      "ᗱ",
    ],
    fontUpper: [
      "ᗩ",
      "ᗷ",
      "ᑢ",
      "ᕲ",
      "ᘿ",
      "ᖴ",
      "ᘜ",
      "ᕼ",
      "ᓰ",
      "ᒚ",
      "ᐸ",
      "ᒪ",
      "ᘻ",
      "ᘉ",
      "ᓍ",
      "ᕵ",
      "ᕴ",
      "ᖇ",
      "S",
      "ᖶ",
      "ᑘ",
      "ᐺ",
      "ᘺ",
      "᙭",
      "ᖻ",
      "ᗱ",
    ],
    fontDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  {
    fontName: "Dashes",
    fontLower: [
      "̶a̶",
      "b̶",
      "c̶",
      "d̶",
      "e̶",
      "f̶",
      "g̶",
      "h̶",
      "i̶",
      "j̶",
      "k̶",
      "l̶",
      "m̶",
      "n̶",
      "o̶",
      "p̶",
      "q̶",
      "r̶",
      "s̶",
      "t̶",
      "u̶",
      "v̶",
      "w̶",
      "x̶",
      "y̶",
      "z̶",
    ],
    fontUpper: [
      "̶A̶",
      "B̶",
      "C̶",
      "D̶",
      "E̶",
      "F̶",
      "G̶",
      "H̶",
      "I̶",
      "J̶",
      "K̶",
      "L̶",
      "M̶",
      "N̶",
      "O̶",
      "P̶",
      "Q̶",
      "R̶",
      "S̶",
      "T̶",
      "U̶",
      "V̶",
      "W̶",
      "X̶",
      "Y̶",
      "Z̶",
    ],
    fontDigits: ["̶1̶", "2̶", "3̶", "4̶", "5̶", "6̶", "7̶", "8̶", "9̶"],
  },
  {
    fontName: "SideSquiggles",
    fontLower: [
      "̴a",
      "b̴",
      "c̴",
      "d̴",
      "e̴",
      "f̴",
      "g̴",
      "h̴",
      "i̴",
      "j̴",
      "k̴",
      "l̴",
      "m̴",
      "n̴",
      "o̴",
      "p̴",
      "q̴",
      "r̴",
      "s̴",
      "t̴",
      "u̴",
      "v̴",
      "w̴",
      "x̴",
      "y̴",
      "z̴",
    ],
    fontUpper: [
      "̴A",
      "B̴",
      "C̴",
      "D̴",
      "E̴",
      "F̴",
      "G̴",
      "H̴",
      "I̴",
      "J̴",
      "K̴",
      "L̴",
      "M̴",
      "N̴",
      "O̴",
      "P̴",
      "Q̴",
      "R̴",
      "S̴",
      "T̴",
      "U̴",
      "V̴",
      "W̴",
      "X̴",
      "Y̴",
      "Z̴",
    ],
    fontDigits: "",
  },
  {
    fontName: "SideSlashes",
    fontLower: [
      "a̷",
      "b̷",
      "c̷",
      "d̷",
      "e̷",
      "f̷",
      "g̷",
      "h̷",
      "i̷",
      "j̷",
      "k̷",
      "l̷",
      "m̷",
      "n̷",
      "o̷",
      "p̷",
      "q̷",
      "r̷",
      "s̷",
      "t̷",
      "u̷",
      "v̷",
      "w̷",
      "x̷",
      "y̷",
      "z̷",
    ],
    fontUpper: [
      "̷̷A̷",
      "B̷",
      "C̷",
      "D̷",
      "E̷",
      "F̷",
      "G̷",
      "H̷",
      "I̷",
      "J̷",
      "K̷",
      "L̷",
      "M̷",
      "N̷",
      "O̷",
      "P̷",
      "Q̷",
      "R̷",
      "S̷",
      "T̷",
      "U̷",
      "V̷",
      "W̷",
      "X̷",
      "Y̷",
      "Z̷",
    ],
    fontDigits: ["0̷", "0", "1̷", "2̷", "3̷", "4̷", "5̷", "6̷", "7̷", "8̷", "9̷"],
  },
  {
    fontName: "DoubleUnderline",
    fontLower: [
      "̳a̳",
      "b̳",
      "c̳",
      "d̳",
      "e̳",
      "f̳",
      "g̳",
      "h̳",
      "i̳",
      "j̳",
      "k̳",
      "l̳",
      "m̳",
      "n̳",
      "o̳",
      "p̳",
      "q̳",
      "r̳",
      "s̳",
      "t̳",
      "u̳",
      "v̳",
      "w̳",
      "x̳",
      "y̳",
      "z̳",
    ],
    fontUpper: [
      "A̳",
      "B̳",
      "C̳",
      "D̳",
      "E̳",
      "F̳",
      "G̳",
      "H̳",
      "I̳",
      "J̳",
      "K̳",
      "L̳",
      "M̳",
      "N̳",
      "O̳",
      "P̳",
      "Q̳",
      "R̳",
      "S̳",
      "T̳",
      "U̳",
      "V̳",
      "W̳",
      "X̳",
      "Y̳",
      "Z̳",
    ],
    fontDigits: ["0̳", "1̳", "2̳", "3̳", "4̳", "5̳", "6̳", "7̳", "8̳", "9̳"],
  },
  {
    fontName: "TopSquiggles",
    fontLower: [
      "̾a",
      "b̾",
      "c̾",
      "d̾",
      "e̾",
      "f̾",
      "g̾",
      "h̾",
      "i̾",
      "j̾",
      "k̾",
      "l̾",
      "m̾",
      "n̾",
      "o̾",
      "p̾",
      "q̾",
      "r̾",
      "s̾",
      "t̾",
      "u̾",
      "v̾",
      "w̾",
      "x̾",
      "y̾",
      "z̾",
    ],
    fontUpper: [
      "A̾",
      "B̾",
      "C̾",
      "D̾",
      "E̾",
      "F̾",
      "G̾",
      "H̾",
      "I̾",
      "J̾",
      "K̾",
      "L̾",
      "M̾",
      "N̾",
      "O̾",
      "P̾",
      "Q̾",
      "R̾",
      "S̾",
      "T̾",
      "U̾",
      "V̾",
      "W̾",
      "X̾",
      "Y̾",
      "Z̾",
    ],
    fontDigits: ["0̾", "1̾", "2̾", "3̾", "4̾", "5̾", "6̾", "7̾", "8̾", "9̾"],
  },
  {
    fontName: "ArrowUp",
    fontLower: [
      "a͎",
      "b͎",
      "c͎",
      "d͎",
      "e͎",
      "f͎",
      "g͎",
      "h͎",
      "i͎",
      "j͎",
      "k͎",
      "l͎",
      "m͎",
      "n͎",
      "o͎",
      "p͎",
      "q͎",
      "r͎",
      "s͎",
      "t͎",
      "u͎",
      "v͎",
      "w͎",
      "x͎",
      "y͎",
      "z͎",
    ],
    fontUpper: [
      "A͎",
      "B͎",
      "C͎",
      "D͎",
      "E͎",
      "F͎",
      "G͎",
      "H͎",
      "I͎",
      "J͎",
      "K͎",
      "L͎",
      "M͎",
      "N͎",
      "O͎",
      "P͎",
      "Q͎",
      "R͎",
      "S͎",
      "T͎",
      "U͎",
      "V͎",
      "W͎",
      "X͎",
      "Y͎",
      "Z͎",
    ],
    fontDigits: ["0͎", "1͎", "2͎", "3͎", "4͎", "5͎", "6͎", "7͎", "8͎", "9͎"],
  },
  {
    fontName: "Exes",
    fontLower: [
      "a͓̽",
      "b͓̽",
      "c͓̽",
      "d͓̽",
      "e͓̽",
      "f͓̽",
      "g͓̽",
      "h͓̽",
      "i͓̽",
      "j͓̽",
      "k͓̽",
      "l͓̽",
      "m͓̽",
      "n͓̽",
      "o͓̽",
      "p͓̽",
      "q͓̽",
      "r͓̽",
      "s͓̽",
      "t͓̽",
      "u͓̽",
      "v͓̽",
      "w͓̽",
      "x͓̽",
      "y͓̽",
      "z͓̽",
    ],
    fontUpper: [
      "A͓̽",
      "B͓̽",
      "C͓̽",
      "D͓̽",
      "E͓̽",
      "F͓̽",
      "G͓̽",
      "H͓̽",
      "I͓̽",
      "J͓̽",
      "K͓̽",
      "L͓̽",
      "M͓̽",
      "N͓̽",
      "O͓̽",
      "P͓̽",
      "Q͓̽",
      "R͓̽",
      "S͓̽",
      "T͓̽",
      "U͓̽",
      "V͓̽",
      "W͓̽",
      "X͓̽",
      "Y͓̽",
      "Z͓̽",
    ],
    fontDigits: ["0͓̽", "1͓̽", "2͓̽", "3͓̽", "4͓̽", "5͓̽", "6͓̽", "7͓̽", "8͓̽", "9͓̽"],
  },
  {
    fontName: "Comic",
    fontLower: "ᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇՏTᑌᐯᗯ᙭Yᘔ",
    fontUpper: "ᗩᗷᑕᗪᗴᖴᘜᕼIᒍKᒪᗰᑎOᑭᑫᖇՏTᑌᐯᗯ᙭Yᘔ",
    fontDigits: "",
    experimentalFont: true,
  },
  {
    fontName: "Andalusia",
    fontLower: "ꪖ᥇ᥴᦔꫀᠻᧁꫝ𝓲𝓳𝘬ꪶꪑꪀꪮρ𝘲𝘳𝘴𝓽ꪊꪜ᭙᥊ꪗɀ",
    fontUpper: "ꪖ᥇ᥴᦔꫀᠻᧁꫝ𝓲𝓳𝘬ꪶꪑꪀꪮρ𝘲𝘳𝘴𝓽ꪊꪜ᭙᥊ꪗɀ",
    fontDigits: "",
    experimentalFont: true,
  },
  {
    fontName: "Manga",
    fontLower: "卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙",
    fontUpper: "卂乃匚ᗪ乇千ᘜ卄|ﾌҜㄥ爪几ㄖ卩Ҩ尺丂ㄒㄩᐯ山乂ㄚ乙",
    fontDigits: "",
    experimentalFont: true,
  },
  {
    fontName: "Rune",
    fontLower: "ልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃጊ",
    fontUpper: "ልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃጊ",
    "fontDigits:": "",
    experimentalFont: true,
  },
];

String.prototype.unicodeAwareSplit = function () {
  // javascript doesn't handle surrogate pairs properly so we have to get around it this way
  let _arr = [];
  for (const _c of this.valueOf()) {
    _arr.push(_c);
  }
  return _arr;
};

String.prototype.toAlternateCase = function () {
  let _arr = [];
  let _alternate = true;
  for (const _c of this.valueOf()) {
    if (_alternate) {
      _alternate = false;
      _arr.push(_c.toUpperCase());
    } else {
      _alternate = true;
      _arr.push(_c.toLowerCase());
    }
  }
  return _arr.join("");
};

/* PseudoFont: Unicode Font Parser & Converter */
class PseudoFont {
  constructor(fontName, fontLower, fontUpper, fontDigits) {
    this.fontName = fontName;

    // splitting if not already an array, otherwise JavaScript won't handle the characters properly.
    this.fontLower = Array.isArray(fontLower)
      ? fontLower
      : fontLower.unicodeAwareSplit();
    this.fontUpper = Array.isArray(fontUpper)
      ? fontUpper
      : fontUpper.unicodeAwareSplit();
    this.fontDigits = Array.isArray(fontDigits)
      ? fontDigits
      : fontDigits.unicodeAwareSplit();

    this.referenceLower = "abcdefghijklmnopqrstuvwxyz";
    this.referenceUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.referenceDigits = "0123456789";

    // experimental means either:
    // 		- the font is incomplete.
    //		- the font is unsupported on several platforms.
    this.experimental = false;
  }

  setExperimental(state) {
    this.experimental = state;
  }

  convert(rawText) {
    let _converted = "";
    for (const _char of rawText) {
      if (this.referenceLower.includes(_char)) {
        // if character is lowercase
        _converted += this.fontLower[this.referenceLower.indexOf(_char)];
      } else if (this.referenceUpper.includes(_char)) {
        // if character is uppercase
        _converted += this.fontUpper[this.referenceUpper.indexOf(_char)];
      } else if (this.referenceDigits.includes(_char)) {
        // if character is digit
        _converted += this.fontDigits[this.referenceDigits.indexOf(_char)];
      } else {
        _converted += _char;
      }
    }
    return _converted;
  }
}

/* Variables */
const randomTexts = [
  "Why did Adele cross the road? To say hello from the other side.",
  "What kind of concert only costs 45 cents? A 50 Cent concert featuring Nickelback.",
  "What did the grape say when it got crushed? Nothing, it just let out a little wine.",
  "I want to be cremated as it is my last hope for a smoking hot body.",
  "Time flies like an arrow. Fruit flies like a banana.",
  "To the guy who invented zero, thanks for nothing.",
  "I had a crazy dream last night! I was swimming in an ocean of orange soda. Turns out it was just a Fanta sea.",
  "A crazy wife says to her husband that moose are falling from the sky. The husband says, it’s reindeer.",
  "Ladies, if he can’t appreciate your fruit jokes, you need to let that mango.",
  "Geology rocks but Geography is where it’s at!",
  "I had a crazy dream last night! I was swimming in an ocean of orange soda. Turns out it was just a Fanta sea.",
  "A crazy wife says to her husband that moose are falling from the sky. The husband says, it’s reindeer.",
  "Ladies, if he can’t appreciate your fruit jokes, you need to let that mango.",
  "Geology rocks but Geography is where it’s at!",
  "Smaller babies may be delivered by stork but the heavier ones need a crane.",
  "My grandpa has the heart of the lion and a lifetime ban from the zoo.",
  "Why was Dumbo sad? He felt irrelephant.",
  "A man sued an airline company after it lost his luggage. Sadly, he lost his case.",
  "I lost my mood ring and I don’t know how to feel about it!",
  "Yesterday, I accidentally swallowed some food coloring. The doctor says I’m okay, but I feel like I’ve dyed a little inside.",
  "So what if I don’t know what apocalypse means? It’s not the end of the world!",
  "My friend drove his expensive car into a tree and found out how his Mercedes bends.",
  "Becoming a vegetarian is one big missed steak.",
  "I was wondering why the ball was getting bigger. Then it hit me.",
  "Some aquatic mammals at the zoo escaped. It was otter chaos!",
  "Never trust an atom, they make up everything!",
  "Waking up this morning was an eye-opening experience.",
  "Long fairy tales have a tendency to dragon.",
  "What do you use to cut a Roman Emperor’s hair? Ceasers.",
  "The Middle Ages were called the Dark Ages because there were too many knights.",
  "My sister bet that I couldn’t build a car out of spaghetti. You should’ve seen her face when I drove pasta.",
  "I made a pun about the wind but it blows.",
  "Never discuss infinity with a mathematician, they can go on about it forever.",
  "I knew a guy who collected candy canes, they were all in mint condition.",
  "My wife tried to apply at the post office but they wouldn’t letter. They said only mails work here.",
  "My friend’s bakery burned down last night. Now his business is toast.",
  "Getting the ability to fly would be so uplifting.",
  "It's hard to explain puns to kleptomaniacs because they always take things literally.",
  "Two windmills are standing in a wind farm. One asks, “What’s your favorite kind of music?” The other says, “I’m a big metal fan.”",
  "I can’t believe I got fired from the calendar factory. All I did was take a day off!",
  "England doesn't have a kidney bank, but it does have a Liverpool.",
  "What do you call the wife of a hippie? A Mississippi.",
  "A cross-eyed teacher couldn’t control his pupils.",
  "She had a photographic memory, but never developed it.",
  "I wasn’t originally going to get a brain transplant, but then I changed my mind.",
  "There was a kidnapping at school yesterday. Don’t worry, though - he woke up!",
  "What do you get when you mix alcohol and literature? Tequila mockingbird.",
  "What washes up on tiny beaches? Microwaves.",
  "I hate how funerals are always at 9 a.m. I’m not really a mourning person.",
];

var convertAll = true; // whether to convert and display all available fonts or not.
var randomText = "The quick brown fox jumps over the lazy dog."; // random text used for placeholder if user input is null.
var userInput = ""; // input from the user (updated on keyup)
// var selectedFont = ""; // the font the user selected.
var selectedStyle = ""; // the font style the user selected.
var fonts = []; // all the fonts that the user can choose from

/* Elements */
const e_inputTextArea = document.getElementById("input-text-area");
// const e_fontSelect = document.getElementById("font-select");
// const e_fontStyleSelect = document.getElementById("font-style-select");
// const e_viewAllConversions = document.getElementById("view-all-conversions");

const e_outputText = document.getElementById("output-text");
const e_outputList = document.getElementById("output-list");

// Fetch the fonts.json file and set everything up.
// To-Do: add a fallback in case the fonts can't be fetched (in case of running offline or something)

// fetch("fonts.json")
//   .then((response) => response.json())
//   .then((_fontFiles) => {

for (const _font of _fontFiles) {
  // make a new pseudofont object.
  let _newFont = new PseudoFont(
    _font["fontName"],
    _font["fontLower"] || "abcdefghijklmnopqrstuvwxyz",
    _font["fontUpper"] || "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    _font["fontDigits"] || "0123456789"
  );

  if (_font["experimentalFont"] === true) {
    _newFont.setExperimental(true);
  }

  // add the font to the font list.
  fonts.push(_newFont);

  // add the font to the fonts selection list.
  let _newFontOption = document.createElement("option");
  _newFontOption.value = _newFont.fontName;
  if (_newFont.experimental) {
    _newFontOption.innerHTML = `${_newFont.fontName} [EXPERIMENTAL]`;
  } else {
    _newFontOption.innerHTML = `${_newFont.fontName} (${_newFont.convert(
      _newFont.fontName
    )})`;
  }
  // e_fontSelect.appendChild(_newFontOption);
}

// enable the text area once the fonts have been loaded.
e_inputTextArea.disabled = false;

// show how many fonts are loaded inside parenthesis
//e_viewAllConversions.innerText = `View All Fonts (${fonts.length})`;
// e_viewAllConversions.innerText = `View All Fonts (${
//   fonts.filter((x) => !x.experimental).length
// })`; // excluding experimental fonts

// select a random font to show at start.
// e_fontSelect.selectedIndex = Math.floor(Math.random() * fonts.length);

// update all variables and convert the first text.
updateUserInput();
updateFontInput();
convertText();
//   });

/* Event Listeners */
// Convert text on update of the text field.
e_inputTextArea.addEventListener("keyup", () => {
  updateUserInput();
  convertTextAll();
});

// Convert text when font is changed from the list.
// e_fontSelect.addEventListener("change", () => {
//   updateFontInput();
//   convertText();
// });

// Convert text when font style is changed from the list.
// e_fontStyleSelect.addEventListener("change", () => {
//   updateFontInput();
//   updateUserInput();
//   convertText();
// });

function onClickText(text) {
  e_outputText.innerHTML = text;
  let _range = document.createRange();
  window.getSelection().removeAllRanges();
  _range.selectNode(e_outputText);
  window.getSelection().addRange(_range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  // To-Do: replace this with a less annoying pop-up later.
  alert("Copied to clipboard!");
}

/* Update Functions */
function updateUserInput() {
  let _userInput = e_inputTextArea.value;
  if (_userInput.trim()) {
    userInput = _userInput;
  } else {
    // generate a new random placeholder if the textarea has no value.
    updateRandomText();
    userInput = "Hello world";
  }

  switch (selectedStyle) {
    case "shift-upper":
      userInput = userInput.toUpperCase();
      break;
    case "shift-lower":
      userInput = userInput.toLowerCase();
      break;
    case "shift-alternate":
      userInput = userInput.toAlternateCase();
      break;
    case "spaced":
      userInput = userInput.split("").join(" ");
      break;
    case "reverse":
      userInput = userInput.split("").reverse().join("");
      break;
  }
}

function updateFontInput() {
  // update the selected font and its style.
  // selectedFont = fonts.find((fnt) => fnt.fontName === e_fontSelect.value);
  // selectedStyle = e_fontStyleSelect.value;
}

function updateRandomText() {
  // new random pun for placeholder.
  randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
}

/* Conversion Functions */
function convertText() {
  // update the main font output.
  // e_outputText.innerHTML = selectedFont.convert(userInput);
}

function convertTextAll() {
  // update the main font output.
  convertText();

  // make sure we convert everything only if the user has clicked the "View All" <detail> tag.

  if (convertAll) {
    // remove all children of the output list
    e_outputList.innerHTML = "";

    // convert the text and display all available fonts.
    for (const _font of fonts) {
      if (!_font.experimental) {
        let _li = document.createElement("li");
        _li.classList.add(
          "p-1",
          "border",
          "rounded-md",
          "shadow-md",
          "hover:cursor-pointer"
        );
        _li.innerHTML = `<p>${_font.convert(userInput)}</p>`;

        _li.addEventListener("click", () =>
          onClickText(_font.convert(userInput))
        );
        e_outputList.appendChild(_li);
      }
    }
  }
}

convertTextAll();

// Set a randomly generated pastel color for the background.
// just a cute little addition ^^
var _hue = Math.floor(Math.random() * 360);
_pastel = `hsl(${_hue}, 100%, 80%)`;
document.body.style.backgroundColor = _pastel;
document
  .querySelector('meta[name="theme-color"]')
  .setAttribute("content", _pastel);
