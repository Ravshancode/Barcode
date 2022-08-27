// BU kod shtrix kodlar uchun ishlaydi

function add() {
  var a = document.getElementById("input").value;

  var a = parseInt((document.getElementById("sabr").innerHTML = a));

  // Shtrix codlarni sonlarini olish
  var b = parseInt(a % 10000000);
  var c = parseInt(a / 1000000);

  var shtrix13 = parseInt(b / 1) % 10;
  var shtrix12 = parseInt(b / 10) % 10;
  var shtrix11 = parseInt(b / 100) % 10;
  var shtrix10 = parseInt(b / 1000) % 10;
  var shtrix9 = parseInt(b / 10000) % 10;
  var shtrix8 = parseInt(b / 100000) % 10;  

  var shtrix7 = parseInt(c / 1) % 10;
  var shtrix6 = parseInt(c / 10) % 10;
  var shtrix5 = parseInt(c / 100) % 10;
  var shtrix4 = parseInt(c / 1000) % 10;
  var shtrix3 = parseInt(c / 10000) % 10;
  var shtrix2 = parseInt(c / 100000) % 10;
  var shtrix1 = parseInt(c / 1000000) % 10;

  // Codeni  hisoblash

  var juft = (shtrix2 + shtrix10 + shtrix12 + shtrix4 + shtrix6 + shtrix8) * 3;
  var toq = shtrix1 + shtrix3 + shtrix5 + shtrix7 + shtrix9 + shtrix11;
  var sum = juft + toq;
  var mamlakat = parseInt(c / 10000);
  var f = Math.round(10 - ((sum / 1) % 10));
  var mamlakat2 = Math.floor(a / 10 ** 7) % 10 ** 3;
  var kirish = parseInt(c / 10000);
  let test1 = Math.floor(a / 10 ** 6) % 10 ** 4;
  let test2 = Math.floor(a / 10 ** 5) % 10 ** 5;

  // haqiqiy yoki soxtaligini aniqlash.

  if (f > 9) {
    var f = Math.round(((10 - ((sum / 1) % 10)) / 1) % 10);

    if (f === shtrix13 && a>10**12 && a<10**14) {
      document.getElementById("result").innerHTML = "THE PRODUCT IS TRUE";
    } else
      document.getElementById("result").innerHTML =
        "<p style='color: red;'>THE PRODUCT IS FAKE...</p>";
  } else if (f < 10) {
    var f = Math.round(10 - ((sum / 1) % 10));

    if (f === shtrix13 && a>10**12 && a<10**14) {
      document.getElementById("result").innerHTML = "THE PRODUCT IS TRUE";
    } else
      document.getElementById("result").innerHTML =
        "<p style='color: red;'>THE PRODUCT IS FAKE...</p>";
  }

  // maxsulotlarni Mamlakatlari haqidagi baza

  if (mamlakat >= 0 && mamlakat <= 79 && f === shtrix13 && kirish !== 978) {
    let proName;
    switch (mamlakat) {
      case 000: case 1: case 19 :case  30:case  39 :case  50 :case 59 :case 60 :case 70 :case 79:
        proName = "AQSH";
        break;
      default:
        document.getElementById("sabr").innerHTML = " AN ERROR HAS ARRIVED";
        break;
    }

    document.getElementById("sabr").innerHTML = "MADE IN " + proName;
  }
  if (f === shtrix13 && kirish !== 978 && a>10**12 && a<10**14) {
    let proName;
    console.log(mamlakat);
    switch (mamlakat) {

      case  139:  proName = "AQSH";
      break;

      case 300  : case 379:
        proName = "FRANSIYA";
        break;

      case 380:
        proName = "BELGIYA";
        break;
      case 383:
        proName = "SLOVENIYA";
        break;
      case 385:
        proName = "XARVATIYA";
        break;
      case 387:
        proName = "BIH (BOSNIYA-GERSAGVONYA)";
        break;
      case 389:
        proName = "CHERNOGORIYA";
        break;
      case 400  :case 440:
        proName = "GERMANIYA";
        break;
      case 450  :case 459  :case 490  :case 499:
        proName = "YAPONYA";
        break;

      case 460  :case 462  :case 469:
        proName = "ROSSIYA";
        break;

      case 464  :case 478:
        proName = "UZBEKISTAN";
        break;
      case 470:
        proName = "QIRG'IZISTON";
        break;
      case 471:
        proName = "XITOY  TAYPEYI";
        break;
      case 474:
        proName = "ESTONIYA";
        break;
      case 475:
        proName = "LTVIA";
        break;
      case 476:
        proName = "AZARBAYJAN";
        break;
      case 477:
        proName = "LITVA";
        break;
      case 479:
        proName = "SHRI LANKA";
        break;
      case 480:
        proName = "FILLIPIN";
        break;

      case 481:
        proName = "BELARUS";
        break;

      case 482:
        proName = "UKRAYINA";
        break;
      case 483:
        proName = "TURKMANISTON";
        break;
      case 484:
        proName = "MALDOVA";
        break;
      case 485:
        proName = "ARMANISTON";
        break;
      case 486:
        proName = "GRUZIYA";
        break;
      case 487:
        proName = "QOZOG'ISTAN";
        break;

      case 487:
        proName = "QOZOG'ISTON'";
        break;
      case 488:
        proName = "TAJIGISTON";
        break;
      case 489:
        proName = "GANGKONG";
        break;
      case 500  :case 509:
        proName = "BUYUK BRITANYA";
        break;

      case 520  :case 521:
        proName = "GRETSIA";
        break;
      case 528:
        proName = "LIVAN";
        break;
      case 529:
        proName = "KIPR";
        break;
      case 530:
        proName = "ALBANIYA";
        break;
      case 531:
        proName = "MAKIDONIYA";
        break;
      case 535:
        proName = "MALTA";
        break;
      case 539:
        proName = "IRLANDIYA";
        break;

      case 540  :case 549:
        proName = "BELGIA,LYUKSEMBURG";
        break;

      case 560:
        proName = "PARTUGALYA";
        break;
      case 569:
        proName = "ISLANDIYA";
        break;
      case 570  :case 579:
        proName = "DANYA";
        break;

      case 590:
        proName = "POLSHA";
        break;

      case 594:
        proName = "RUMINYA";
        break;

      case 599:
        proName = "VENGRYA";
        break;
      case 600  :case 601:
        proName = "JANUBIY AFRIKA";
        break;
      case 603:
        proName = "GANA";
        break;
      case 604:
        proName = "SENEGAL";
        break;
      case 605  :case 606  :case 607:
        proName = "Global Office";
        break;
      case 608:
        proName = "BAHRAYN";
        break;
      case 609:
        proName = "MAVRIKIY";
        break;

      case 611:
        proName = "MAROKASH";
        break;

      case 613:
        proName = "JAZOIR";
        break;
      case 615:
        proName = "NIGERYA";
        break;
      case 616:
        proName = "KENYA";
        break;
      case 617:
        proName = "KAMERUN";
        break;
      case 618:
        proName = "Kot-d'Ivuar";
        break;
      case 619:
        proName = "TUNIS";
        break;
      case 620:
        proName = "TANZANIYA";
        break;
      case 621:
        proName = "SURYA";
        break;
      case 622:
        proName = "MISR";
        break;
      case 623:
        proName = "BRUNEy";
        break;
      case 624:
        proName = "LIVIYA";
        break;
      case 625:
        proName = "IORDANYA";
        break;
      case 626:
        proName = "ERON";
        break;
      case 627:
        proName = "QUVAYT";
        break;
      case 628:
        proName = "SAUDIYA ARABISTONI";
        break;
      case 629:
        proName = "AMIRLIKLAR";
        break;
      case 630:
        proName = "QATAR";
        break;
      case 631:
        proName = "NAMIBIYA";
        break;

      case 640  :case 649:
        proName = "FINLANDIYA";
        break;

      case 693  :case 690  :case 695  :case 699:
        proName = "CHINA";
        break;

      case 700  : case 709:
        proName = "NARVEGIYA";
        break;

      case 729:
        proName = "ISROIL";
        break;
      case 730  :case 739:
        proName = "SHVETSIYA";
        break;

      case 740:
        proName = "GVATEMALA";
        break;

      case 741:
        proName = "EL SALVADOR";
        break;

      case 742:
        proName = "GANDURAS";
        break;

      case 743:
        proName = "NIKARAGUA";
        break;
      case 644:
        proName = "KOSTA-RIKA";
        break;
      case 645:
        proName = "PANAMA";
        break;
      case 646:
        proName = "DOMINIK RESPUBLIKASI";
        break;
      case 750:
        proName = "MEKSIKA";
        break;

      case 754  :case 755:
        proName = "KANADA";
        break;

      case 759:
        proName = "VENESUELA";
        break;
      case 760  :case 769:
        proName = "SHVEYTSARYA";
        break;

      case 770  :case 771:
        proName = "KALUMBIY";
        break;

      case 773:
        proName = "URUGVAY";
        break;
      case 775:
        proName = "PERU";
        break;
      case 777:
        proName = "BOLIVIYA";
        break;
      case 778  :case 779:
        proName = "ARGENTINA";
        break;

      case 779:
        proName = "ANGLYA";
        break;
      case 780:
        proName = "CHILIY";
        break;
      case 784:
        proName = "PORAGVAY";
        break;
      case 786:
        proName = "EKVADOR";
        break;
      case 780:
        proName = "CHILIY";
        break;
      case 789  :case 790:
        proName = "BRAZILYA";
        break;

      case 800  :case 839:
        proName = "ITALYA";
        break;

      case 840  :case 849:
        proName = "ISPANYA";
        break;

      case 850:
        proName = "KUBA";
        break;

      case 858:
        proName = "SLAVAKIYA";
        break;

      case 859:
        proName = "CHEXIYA";
        break;
      case 860:
        proName = "SERBIYA";
        break;
      case 865:
        proName = "MANGOLYA";
        break;
      case 867:
        proName = "SHIMOLIY KOREYA";
        break;
      case 868  :case 869:
        proName = "TURKIYA";
        break;

      case 870  :case 871  :case 879:
        proName = "GOLLANDIYA";
        break;

      case 880:
        proName = "JANUBIY KAREYA";
        break;
      case 883:
        proName = "MYANMA";
        break;
      case 884:
        proName = "KOMBODJA";
        break;
      //                                                                                                            case 860:proName="";break;

      case 885:
        proName = "TAYLAND";
        break;

      case 888:
        proName = "SINGAPUR";
        break;

      case 890:
        proName = "HINDISTON";
        break;
      case 893:
        proName = "VETNAM";
        break;
      case 896:
        proName = "POKISTON";
        break;

      case 899:
        proName = "INDANEZIYA";
        break;

      case 900  :case 919:
        proName = "AVSTRIYA";
        break;

      case 930  :case 939:
        proName = "AVSTRALYA";
        break;

      case 940  :case 949:
        proName = "YANGI ZELANDIYA";
        break;
      case 950:
        proName = " Global Office";
        break;
      case 958:
        proName = " Macao, China";
        break;

      default:
        proName = "GS1 neytral, notijorat, xalqaro tashkilot, standartlarni, jumladan, shtrix kodlarni ishlab chiqadi va qo'llab-quvvatlaydi"
        break;
    }
console.log(proName);
    document.getElementById("sabr").innerHTML = "MADE IN " + proName;
  }

  // BU kitob shtrix kodlari Mamlakatlar
  else if (
    (f === shtrix13 &&
      kirish === 978 &&
      a > 10 ** 12 &&
      mamlakat2 >= 600 &&
      mamlakat2 <= 625) ||
    mamlakat2 == 988 ||
    mamlakat2 == 989
  ) {
    let name1;
    switch (mamlakat2) {
      case 600:
        name1 = "Eron";
        break;
      case 601:
        name1 = "QOZOG'ISTON";
        break;
      case 602:
        name1 = "INDANEZIA";
        break;
      case 603:
        name1 = "SAUDIYA ARABISTONI";
        break;
      case 606:
        name1 = "RUMINIYA";
        break;
      case 607:
        name1 = "MEKSIKA";
        break;
      case 608:
        name1 = "SHIMOLIY MAKEDONIYA";
        break;
      case 612:
        name1 = "PERU";
        break;
      case 613:
        name1 = "MAVRIKI";
        break;
      case 614:
        name1 = "LIVAN";
        break;
      case 615:
        name1 = "VENGIRYA";
        break;
      case 616:
        name1 = "TAILAND";
        break;
      case 617:
        name1 = "UKRAINA";
        break;
      case 618:
        name1 = "GRETSIA";
        break;
      case 619:
        name1 = "BOLGARIYA";
        break;
      case 620:
        name1 = "MAVRIKI";
        break;
      case 621:
        name1 = "FILLIPIN";
        break;
      case 622:
        name1 = "ERON";
        break;
      case 623:
        name1 = "INDANEZIA";
        break;
      case 624:
        name1 = "SHRI-LANKA";
        break;
      case 625:
        name1 = "TURKIA";
        break;
      case 988:
        name1 = "GONKONG";
        break;
      case 989:
        name1 = "PORTUGALIA";
        break;

      default:
        document.getElementById("sabr").innerHTML = "AN ERROR HAS ARRIVED";
        break;
    }

    document.getElementById("sabr").innerHTML = "MADE IN " + name1;
  } else if (
    f === shtrix13 &&
    kirish === 978 &&
    a > 10 ** 12 &&
    test1 >= 9914 &&
    test1 <= 9962
  ) {
    let name2;
    switch (test1) {
      case 9914:
        name2 = "KENIA";
        break;
      case 9915:
        name2 = "URUGVAY";
        break;
      case 9916:
        name2 = "ESTONIA";
        break;
      case 9917:
        name2 = "BOLIVIA";
        break;
      case 9918:
        name2 = "MALTA";
        break;
      case 9919:
        name2 = "MO'G'ILISTON";
        break;
      case 9920:
        name2 = "MAROKASH";
        break;
      case 9921:
        name2 = "QUVAY";
        break;
      case 9922:
        name2 = "IROQ";
        break;
      case 9923:
        name2 = "IORDANIA";
        break;
      case 9924:
        name2 = "KAMBODJA";
        break;
      case 9925:
        name2 = "KIPR";
        break;
      case 9926:
        name2 = "BOSNIA VA GRETSAGONIA";
        break;
      case 9927:
        name2 = "QATAR";
        break;
      case 9928:
        name2 = "ALBANIA";
        break;
      case 9929:
        name2 = "GVATEMALA";
        break;
      case 9930:
        name2 = "KOSTA-RIKA";
        break;
      case 9931:
        name2 = "JAZOIR";
        break;
      case 9932:
        name2 = "LAOS";
        break;
      case 9933:
        name2 = "SURIA";
        break;
      case 9934:
        name2 = "LATVIA";
        break;
      case 9935:
        name2 = "ISLANDIA";
        break;
      case 9936:
        name2 = "AFG'ANISTAN";
        break;
      case 9937:
        name2 = "NEPAL";
        break;
      case 9938:
        name2 = "TUNIS";
        break;
      case 9939:
        name2 = "ARMANISTON";
        break;
      case 9940:
        name2 = "CHERNAGORIA";
        break;
      case 9941:
        name2 = "GRUZIA";
        break;
      case 9942:
        name2 = "EKVADOR";
        break;
      case 9943:
        name2 = "UZBEKISTON";
        break;
      case 9944:
        name2 = "TURKIA";
        break;
      case 9945:
        name2 = "DOMINIKA";
        break;
      case 9946:
        name2 = "SHIMOLI KOREYA";
        break;
      case 9947:
        name2 = "JAZOIR";
        break;
      case 9948:
        name2 = "BIRLASHGAN ARAB AMIRLIGI";
        break;
      case 9949:
        name2 = "ESTONIA";
        break;
      case 9950:
        name2 = "FALASTIN";
        break;
      case 9951:
        name2 = "KOSOVO";
        break;
      case 9952:
        name2 = "OZARBAYJON";
        break;
      case 9953:
        name2 = "LIVIA";
        break;
      case 9954:
        name2 = "MAROKASH";
        break;
      case 9955:
        name2 = "LITVA";
        break;
      case 9956:
        name2 = "KAMERUN";
        break;
      case 9957:
        name2 = "IORDANIA";
        break;
      case 9958:
        name2 = "BOSNIYA VA GRETSIA";
        break;
      case 9959:
        name2 = "LIVIA";
        break;
      case 9960:
        name2 = "SAUDIYA ARABISTONI";
        break;
      case 9961:
        name2 = "JAZOIR";
        break;
      case 9962:
        name2 = "PANAMA";
        break;
      default:
        document.getElementById("sabr").innerHTML = "AN ERROR HAS ARRIVED";
    }
    document.getElementById("sabr").innerHTML = "MADE IN " + name2;
  } else if (
    f === shtrix13 &&
    kirish === 978 &&
    a > 10 ** 12 &&
    test2 >= 99937 &&
    test2 <= 99985
  ) {
    let name3;
    switch (test2) {
      case 99937:
        name3 = "MAKAO";
        break;
      case 99938:
        name3 = "SRPISKA";
        break;
      case 99939:
        name3 = "GVATEMALA";
        break;
      case 99940:
        name3 = "GRUZIA";
        break;
      case 99941:
        name3 = "ARMANISTON";
        break;
      case 99942:
        name3 = "SUDAN";
        break;
      case 99943:
        name3 = "ALBANIA";
        break;
      case 99944:
        name3 = "EFYOPIA";
        break;
      case 99945:
        name3 = "NAMIBIA";
        break;
      case 99946:
        name3 = "NEPAL";
        break;
      case 99947:
        name3 = "TOJIKISTON";
        break;
      case 99948:
        name3 = "ERITREYA";
        break;
      case 99949:
        name3 = "MAVRIKIA";
        break;
      case 99950:
        name3 = "KAMBODJA";
        break;
      case 99951:
        name3 = "KONGO DEMAKRATIK RESPUBLIKASI";
        break;
      case 99952:
        name3 = "MALIA";
        break;
      case 99953:
        name3 = "PARAGVAY";
        break;
      case 99954:
        name3 = "BOLIVIA";
        break;
      case 99955:
        name3 = "SRPISKA RSPUBLIKASI";
        break;
      case 99956:
        name3 = "ALBANIA";
        break;
      case 99957:
        name3 = "MALTADA";
        break;
      case 99958:
        name3 = "BAHRANIN";
        break;
      case 99959:
        name3 = "LYUKSEMBURG";
        break;
      case 99960:
        name3 = "MALAVI";
        break;
      case 99961:
        name3 = "SALVADOR";
        break;
      case 99962:
        name3 = "MO'G'ILISTON";
        break;
      case 99963:
        name3 = "KAMBODJA";
        break;
      case 99964:
        name3 = "NIKARAGUA";
        break;
      case 99965:
        name3 = "MAKAO";
        break;
      case 99966:
        name3 = "QUVAYT";
        break;
      case 99967:
        name3 = "PARAGVAY";
        break;
      case 99968:
        name3 = "BOTSVANA";
        break;
      case 99969:
        name3 = "UMMON";
        break;
      case 99970:
        name3 = "GAITA";
        break;
      case 99971:
        name3 = "MYANMA";
        break;
      case 99972:
        name3 = "FARER OROLLARI";
        break;
      case 99973:
        name3 = "MO'G'ILISTIN";
        break;
      case 99974:
        name3 = "BOLIVIYA";
        break;
      case 99975:
        name3 = "TOJIGISTON";
        break;
      case 99976:
        name3 = "SRPISKA RSPUBLIKASI";
        break;
      case 99977:
        name3 = "RUANDA";
        break;
      case 99978:
        name3 = "MO'G'ILISTIN";
        break;
      case 99979:
        name3 = "GONDURAS";
        break;
      case 99980:
        name3 = "BUTAN";
        break;
      case 99981:
        name3 = "MAKAO";
        break;
      case 99982:
        name3 = "BENIN";
        break;
      case 99983:
        name3 = "SALVADOR";
        break;
      case 99985:
        name3 = "TOJIKISTON";
        break;

      default:
        document.getElementById("sabr").innerHTML = "AN ERROR HAS ARRIVED";
    }
    document.getElementById("sabr").innerHTML = "MADE IN " + name3;
  }
  document.getElementById("input").value=""
  const card = document.getElementsByClassName("button")[0];
  card.setAttribute(
    "style",
    "display:block;  text-decoration: none;color:black;"
  );
  card.innerHTML = `<a href='https://www.google.com/search?q=${a}' style="text-decoration: none;color:black"> <i class="icon"><img src="img shtrixcode/search-solid.svg" alt=""></i> GooGle</a>`;
}
