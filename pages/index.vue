<template>
  <main>
    <HeaderFooter />

    <div class="content">
      <nav class="menu">
        <a 
          v-for="(menu, index) in menus" 
          :key="menu.link" 
          @click="openMenu(index, menu.link)"
          class="menu__item menu__item--showDeco">{{ menu.title }}
        </a>
      </nav>

      <svg class="decor" width="1440" height="1024" viewBox="0 0 1440 1024" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <!-- square -->
        <g id="decor-0" class="decor-group">
          <g opacity="0.5" filter="url(#filter0_d)">
            <rect x="82.6484" y="-33" width="372.945" height="372.945" transform="rotate(45.2039 82.6484 -33)"
              fill="#929AAB" />
          </g>
          <g opacity="0.6" filter="url(#filter1_d)">
            <rect x="38.5548" y="27.5689" width="292.762" height="292.762" transform="rotate(35.3325 38.5548 27.5689)"
              fill="#929AAB" />
          </g>
          <g opacity="0.7" filter="url(#filter2_d)">
            <rect x="16.1283" y="66.5107" width="244.279" height="244.279" transform="rotate(30.1952 16.1283 66.5107)"
              fill="#929AAB" />
          </g>
          <g opacity="0.8" filter="url(#filter3_d)">
            <rect x="19.1598" y="115.566" width="188.337" height="188.337" transform="rotate(25.3261 19.1598 115.566)"
              fill="#929AAB" />
          </g>
          <g opacity="0.9" filter="url(#filter4_d)">
            <rect x="16.8467" y="153.925" width="143.584" height="143.584" transform="rotate(20.8401 16.8467 153.925)"
              fill="#929AAB" />
          </g>
          <g filter="url(#filter5_d)">
            <rect x="20.9473" y="192.548" width="103.471" height="103.471" transform="rotate(15.8 20.9473 192.548)"
              fill="#929AAB" />
          </g>
        </g>
        <!-- circle -->
        <g id="decor-1" class="decor-group">
          <g opacity="0.2" filter="url(#filter6_d)">
            <circle cx="473" cy="1000" r="367" fill="#929AAB" />
          </g>
          <g opacity="0.3" filter="url(#filter7_d)">
            <circle cx="451.706" cy="938.625" r="295.604" fill="#929AAB" />
          </g>
          <g opacity="0.5" filter="url(#filter8_d)">
            <circle cx="451.706" cy="943.635" r="230.471" fill="#929AAB" />
          </g>
          <g opacity="0.7" filter="url(#filter9_d)">
            <circle cx="420.393" cy="914.826" r="166.59" fill="#929AAB" />
          </g>
          <g opacity="0.8" filter="url(#filter10_d)">
            <circle cx="397.846" cy="914.826" r="129.014" fill="#929AAB" />
          </g>
          <g filter="url(#filter11_d)">
            <circle cx="360.27" cy="897.29" r="68.8908" fill="#929AAB" />
          </g>
        </g>
        <!-- triangle -->
        <g id="decor-2" class="decor-group">
          <g opacity="0.2" filter="url(#filter12_d)">
            <path d="M1354.75 670.27L1395 1125.44L980.683 932.716L1354.75 670.27Z" fill="#929AAB" />
          </g>
          <g opacity="0.3" filter="url(#filter13_d)">
            <path d="M1289.26 745.131L1352.42 1065.35L1043.52 959.939L1289.26 745.131Z" fill="#929AAB" />
          </g>
          <g opacity="0.5" filter="url(#filter14_d)">
            <path d="M1260.17 794.91L1315.92 1050L1067.12 970.737L1260.17 794.91Z" fill="#929AAB" />
          </g>
          <g opacity="0.7" filter="url(#filter15_d)">
            <path d="M1230.11 836.049L1292.24 1014.87L1106.31 979.265L1230.11 836.049Z" fill="#929AAB" />
          </g>
          <g opacity="0.8" filter="url(#filter16_d)">
            <path d="M1214.72 870.491L1265.08 997.987L1129.49 977.859L1214.72 870.491Z" fill="#929AAB" />
          </g>
          <g filter="url(#filter17_d)">
            <path d="M1209.93 910.976L1234.97 974.28L1167.62 964.312L1209.93 910.976Z" fill="#929AAB" />
          </g>
        </g>
        <!-- star -->
        <g id="decor-3" class="decor-group">
          <g opacity="0.2" filter="url(#filter18_d)">
            <path
              d="M1147.12 -137.62L1296.08 11.9308L1484.34 -83.5221L1388.14 104.359L1537.1 253.91L1328.68 220.475L1232.48 408.356L1199.88 199.811L991.463 166.377L1179.73 70.924L1147.12 -137.62Z"
              fill="#929AAB" />
          </g>
          <g opacity="0.4" filter="url(#filter19_d)">
            <path
              d="M1203.66 -71.818L1299.46 43.6096L1438.85 -11.8335L1358.67 114.948L1454.47 230.375L1309.12 193.303L1228.95 320.084L1219.29 170.391L1073.94 133.318L1213.32 77.8752L1203.66 -71.818Z"
              fill="#929AAB" />
          </g>
          <g opacity="0.5" filter="url(#filter20_d)">
            <path
              d="M1222.3 -38.5133L1297.06 59.4359L1413.32 18.6057L1343.26 119.972L1418.02 217.921L1299.97 182.62L1229.91 283.986L1227 160.802L1108.95 125.501L1225.21 84.6704L1222.3 -38.5133Z"
              fill="#929AAB" />
          </g>
          <g opacity="0.6" filter="url(#filter21_d)">
            <path
              d="M1246.02 -2.17391L1296.92 74.6413L1385.7 49.9751L1328.37 122.116L1379.27 198.931L1292.94 166.701L1235.61 238.842L1239.59 146.782L1153.27 114.552L1242.05 89.8859L1246.02 -2.17391Z"
              fill="#929AAB" />
          </g>
          <g opacity="0.8" filter="url(#filter22_d)">
            <path
              d="M1261.78 33.109L1293.18 90.431L1357.4 78.2807L1312.58 125.858L1343.98 183.18L1284.89 155.262L1240.07 202.84L1248.36 138.008L1189.27 110.091L1253.49 97.9403L1261.78 33.109Z"
              fill="#929AAB" />
          </g>
          <g filter="url(#filter23_d)">
            <path
              d="M1272.3 61.5371L1290.73 100.228L1333.23 94.6514L1302.13 124.14L1320.56 162.831L1282.91 142.366L1251.81 171.855L1259.63 129.717L1221.98 109.251L1264.47 103.675L1272.3 61.5371Z"
              fill="#929AAB" />
          </g>
        </g>
        <!-- circle -->
        <g id="decor-4" class="decor-group">
          <g opacity="0.2" filter="url(#filter24_d)">
            <circle cx="636.5" cy="279.5" r="163.5" transform="rotate(-90 636.5 279.5)" fill="#929AAB" />
          </g>
          <g opacity="0.3" filter="url(#filter25_d)">
            <circle cx="609.157" cy="288.986" r="131.693" transform="rotate(-90 609.157 288.986)" fill="#929AAB" />
          </g>
          <g opacity="0.5" filter="url(#filter26_d)">
            <circle cx="611.389" cy="288.986" r="102.676" transform="rotate(-90 611.389 288.986)" fill="#929AAB" />
          </g>
          <g opacity="0.7" filter="url(#filter27_d)">
            <circle cx="598.555" cy="302.937" r="74.2167" transform="rotate(-90 598.555 302.937)" fill="#929AAB" />
          </g>
          <g opacity="0.8" filter="url(#filter28_d)">
            <circle cx="598.555" cy="312.981" r="57.4761" transform="rotate(-90 598.555 312.981)" fill="#929AAB" />
          </g>
          <g filter="url(#filter29_d)">
            <circle cx="590.742" cy="329.722" r="30.6911" transform="rotate(-90 590.742 329.722)" fill="#929AAB" />
          </g>
          
        </g>
        <defs>
          <filter id="filter0_d" x="-194" y="-45" width="551.42" height="551.42" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter1_d" x="-142.755" y="15.5689" width="432.148" height="432.148" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter2_d" x="-118.731" y="54.5107" width="357.994" height="357.994" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter3_d" x="-73.4051" y="103.566" width="274.801" height="274.801" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter4_d" x="-46.2349" y="141.925" width="209.272" height="209.272" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter5_d" x="-19.2258" y="180.548" width="151.734" height="151.734" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter6_d" x="94" y="621" width="758" height="758" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter7_d" x="144.102" y="631.021" width="615.208" height="615.208" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter8_d" x="209.235" y="701.164" width="484.942" height="484.942" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter9_d" x="241.802" y="736.235" width="357.181" height="357.181" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter10_d" x="256.833" y="773.812" width="282.027" height="282.027" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter11_d" x="279.379" y="816.399" width="161.782" height="161.782" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter12_d" x="968.682" y="561.907" width="605.221" height="575.534" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter13_d" x="1031.52" y="680.424" width="424.19" height="396.928" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter14_d" x="1055.12" y="743.277" width="341.436" height="318.724" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter15_d" x="1094.31" y="806.247" width="240.764" height="220.624" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter16_d" x="1117.49" y="848.427" width="177.029" height="161.559" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter17_d" x="1155.62" y="893.992" width="99.9741" height="92.2873" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter18_d" x="888.682" y="-274.57" width="754.544" height="742.652" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter19_d" x="1009.21" y="-156.394" width="526.955" height="516.199" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter20_d" x="1058.12" y="-103.961" width="430.026" height="420.362" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter21_d" x="1117.81" y="-46.4624" width="317.853" height="309.637" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter22_d" x="1165.71" y="5.20401" width="222.383" height="215.711" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter23_d" x="1204.67" y="42.2372" width="149.136" height="144.406" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter24_d" x="461" y="104" width="351" height="351" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter25_d" x="465.464" y="145.294" width="287.386" height="287.386" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter26_d" x="496.713" y="174.311" width="229.352" height="229.352" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter27_d" x="512.338" y="216.72" width="172.433" height="172.433" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter28_d" x="529.078" y="243.505" width="138.952" height="138.952" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
          <filter id="filter29_d" x="548.051" y="287.031" width="85.3823" height="85.3823" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.290196 0 0 0 0 0.337255 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>

    </div>

  </main>
</template>

<script>
import HeaderFooter from '~/components/HeaderFooter'
export default {
  components: {
    HeaderFooter
  },

  data: () => ({
    menus: [
      { title: 'About', link: '/about' },
      { title: 'Blogs', link: '/blogs' },
      { title: 'Projects', link: '/projects' },
      { title: 'Works', link: '/works' }
    ]
  }),

  methods: {
    openMenu(index, menu) {
      let decor = document.querySelector(`#decor-${index}`)
      this.$anime({
        targets: decor,
        easing: 'spring([0.8,0,0.1,0])'
      })
      // hidden
      let decors = document.querySelector('svg.decor').querySelectorAll('.decor-group')
      let decorsArray = [...decors]
      let decorsFiltered = decorsArray.filter((el, i) => i !== index)
      decorsFiltered.forEach(decor => {
        this.$anime({
          targets: decor,
          easing: 'easeInOutExpo',
          scale: 0,
          opacity: 0,
          duration: 500,
          delay: (t,i,total) => (total-i-1)*80
        })
      })
      // body
      this.$anime({
        targets: 'body',
        easing: 'easeInOutQuad',
        backgroundColor: '#717684',
        duration: 1000
      })
      // change page
      setTimeout(() => {
        this.$router.push(menu)
      }, 1000);
    }
  },

  mounted() {
    this.$anime.set('body', { backgroundColor: '#0B0B0D' })
    const decors = document.querySelector('svg.decor').querySelectorAll('.decor-group')
    decors.forEach(decor => {
        decor.children.forEach(g => {
          this.$anime({
            targets: g,
            scale: [0.5, 1],
            easing: 'easeInOutSine',
            delay: 100,
            duration: 300
          })
        })
    })
    // menu
    this.$anime.set('.menu .menu__item', {
      translateX: 50,
      opacity: 0
    })
    this.$anime({
      targets: '.menu .menu__item',
      translateX: 0,
      opacity: 1,
      easing: 'easeOutElastic(1, .6)',
      delay: this.$anime.stagger(300),
    })
  }
}
</script>

<style>
svg {
  transform-origin: unset unset;
}
g {
  transform-origin: 50% 50%;
  transform-box: fill-box;
}
</style>
