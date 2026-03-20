<template>
    <div class="siwr">
        <div :class="[mobileView ? 'main-header-m' : 'main-header']">
            <header>stick it with robert</header>
            <div :class="[mobileView ? 'introduction-m' : 'introduction']">
                your froggy desk companion to keep your daily focus on track
            </div>
            <button @click="openWidget" class="open-button">open widget</button>
        </div>
    
        <div class="desk-scene">
            <svg class="robert-desk" v-if="!mobileView" width="100%" height="100%" viewBox="0 0 1832 368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M865.615 208.047L1040.7 208.047C1066.89 208.047 1088.13 186.84 1088.13 160.68V96.0716C1088.13 69.9118 1066.89 48.7051 1040.7 48.7051L865.615 48.7051C839.422 48.7051 818.188 69.9118 818.188 96.0716V160.68C818.188 186.84 839.422 208.047 865.615 208.047Z" fill="#615A58" stroke="#4A4544" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M865.615 208.047L1040.7 208.047C1066.89 208.047 1088.13 186.84 1088.13 160.68V96.0716C1088.13 69.9118 1066.89 48.7051 1040.7 48.7051L865.615 48.7051C839.422 48.7051 818.188 69.9118 818.188 96.0716V160.68C818.188 186.84 839.422 208.047 865.615 208.047Z" fill="#615A58" stroke="#4A4544" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M775.06 222.718L760.956 231.665C760.011 232.283 758.741 231.665 758.61 230.559L757.731 223.044C757.633 222.328 757.079 221.775 756.363 221.71L750.109 221.092C749.229 220.994 748.61 220.214 748.74 219.335L750.109 210.617C750.239 209.836 749.75 209.088 748.969 208.892L742.161 207.168C741.086 206.875 740.63 205.574 741.346 204.728L758.545 191.423" fill="#8E8733"/>
            <path d="M775.06 222.718L760.956 231.665C760.011 232.283 758.741 231.665 758.61 230.559L757.731 223.044C757.633 222.328 757.079 221.775 756.363 221.71L750.109 221.092C749.229 220.994 748.61 220.214 748.74 219.335L750.109 210.617C750.239 209.836 749.75 209.088 748.969 208.892L742.161 207.168C741.086 206.875 740.63 205.574 741.346 204.728L758.545 191.423" stroke="#5F5523" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M867.83 155.41C867.83 155.41 796.722 213.154 776.298 222.393C776.298 222.393 761.347 200.336 757.992 191.325C757.992 191.325 829.589 142.364 835.712 134.719" fill="#4D58A6"/>
            <path d="M867.83 155.41C867.83 155.41 796.722 213.154 776.298 222.393C776.298 222.393 761.347 200.336 757.992 191.325C757.992 191.325 829.589 142.364 835.712 134.719" stroke="#303E78" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M937.733 124.212V246.564L923.14 251.672H855.192L850.208 160.81" fill="#F2E8E3"/>
            <path d="M937.733 124.212V246.564L923.14 251.672H855.192L850.208 160.81" stroke="#B0A7A5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M850.208 160.81L855.224 251.672C855.224 251.672 812.781 253.526 802.194 248.419L820.501 145.748L850.208 160.81Z" fill="#4D58A6" stroke="#303E78" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M897.505 29.251C897.505 29.251 882.065 2.63987 853.237 9.01613C824.409 15.4249 821.185 50.104 821.185 50.104" fill="#8E8733"/>
            <path d="M897.505 29.251C897.505 29.251 882.065 2.63987 853.237 9.01613C824.409 15.4249 821.185 50.104 821.185 50.104" stroke="#5F5523" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M840.501 42.459C840.501 50.5594 847.081 57.1309 855.192 57.1309C863.302 57.1309 869.882 50.5594 869.882 42.459C869.882 34.3585 863.302 27.787 855.192 27.787C847.081 27.787 840.501 34.3585 840.501 42.459Z" fill="#2D2A27"/>
            <path d="M1008.55 66.6302C1008.55 66.6302 999.721 53.0644 989.754 44.5085C985.226 40.6046 985.649 13.8634 958.483 8.00761C931.316 2.15186 919.981 23.5579 905.746 27.5593C891.544 31.5607 806.201 41.3203 791.673 74.9584C782.618 95.9415 773.302 143.471 879.427 169.301C985.584 195.164 1008.55 66.5976 1008.55 66.5976" fill="#8E8733"/>
            <path d="M1008.55 66.6302C1008.55 66.6302 999.721 53.0644 989.754 44.5085C985.226 40.6046 985.649 13.8634 958.483 8.00761C931.316 2.15186 919.981 23.5579 905.746 27.5593C891.544 31.5607 806.201 41.3203 791.673 74.9584C782.618 95.9415 773.302 143.471 879.427 169.301C985.584 195.164 1008.55 66.5976 1008.55 66.5976" stroke="#5F5523" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M937.31 48.6725C937.31 56.773 943.89 63.3444 952.001 63.3444C960.111 63.3444 966.691 56.773 966.691 48.6725C966.691 40.5721 960.111 34.0006 952.001 34.0006C943.89 34.0006 937.31 40.5721 937.31 48.6725Z" fill="#2D2A27"/>
            <path d="M863.595 66.012L861.739 70.9894" stroke="#2D2A27" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M847.211 65.5241L846.983 70.5991" stroke="#2D2A27" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M900.664 94.6402C836.201 99.032 788.871 94.6402 788.871 94.6402" stroke="#2D2A27" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M953.14 190.252L937.733 124.212L889.589 160.81L879.622 194.708" fill="#F2E8E3"/>
            <path d="M953.14 190.252L937.733 124.212L889.589 160.81L879.622 194.708" stroke="#B0A7A5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1012.42 65.6542L931.056 129.417C931.056 129.417 915.811 241.815 923.14 251.639C923.14 251.639 1043.5 250.761 1060.47 229.875C1060.47 229.875 1060.47 111.915 1012.42 65.6542Z" fill="#4D58A6" stroke="#303E78" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M889.98 188.527L900.176 207.884C900.371 208.274 900.404 208.73 900.208 209.153L883.466 247.54C882.977 248.679 881.348 248.711 880.827 247.605L861.153 207.201C860.957 206.81 860.957 206.322 861.153 205.932L869.947 187.649C870.208 187.129 870.762 186.803 871.348 186.836L888.775 187.779C889.296 187.779 889.752 188.104 889.98 188.56" fill="#DF6665"/>
            <path d="M889.98 188.527L900.176 207.884C900.371 208.274 900.404 208.73 900.208 209.153L883.466 247.54C882.977 248.679 881.348 248.711 880.827 247.605L861.153 207.201C860.957 206.81 860.957 206.322 861.153 205.932L869.947 187.649C870.208 187.129 870.762 186.803 871.348 186.836L888.775 187.779C889.296 187.779 889.752 188.104 889.98 188.56" stroke="#BD3C41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M861.413 160.81C868.091 155.768 898.417 160.81 898.417 160.81C898.417 160.81 896.69 179.288 891.804 188.235C891.804 188.235 878.221 192.854 867.374 188.235C867.374 188.235 858.579 162.957 861.413 160.81Z" fill="#CF535D"/>
            <path d="M861.413 160.81C868.091 155.768 898.417 160.81 898.417 160.81C898.417 160.81 896.69 179.288 891.804 188.235C891.804 188.235 878.221 192.854 867.374 188.235C867.374 188.235 858.579 162.957 861.413 160.81Z" fill="#DF6665" stroke="#BD3C41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1829 218H3V365H1829V218Z" fill="#CB8F66" stroke="#B86F3C" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M787.328 190.778H556.791V218H787.328V190.778Z" fill="#A7A8AA" stroke="#54565A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M700.389 78.8011H527.284V217.965H700.389V78.8011Z" fill="#A7A8AA" stroke="#54565A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M621.398 161.133C611.55 170.968 591.574 166.894 591.574 166.894C591.574 166.894 587.53 146.908 597.342 137.108C607.189 127.273 627.166 131.348 627.166 131.348C627.166 131.348 631.21 151.333 621.398 161.133Z" fill="#F2E8E3" stroke="#54565A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="robert-mouse">
            <path d="M591.574 166.894L609.37 149.121" stroke="#54565A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M889.458 217.982H825.744C825.744 200.252 840.141 185.873 857.894 185.873H863.79C877.959 185.873 889.458 197.357 889.458 211.508V217.982Z" fill="#A7A8AA" stroke="#54565A" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M872.552 170.713C864.181 169.086 855.158 171.201 848.35 176.341C846.037 178.098 843.887 180.277 842.878 183.01C841.51 186.621 842.356 190.818 844.343 194.136C845.418 195.925 846.917 197.552 848.904 198.235C851.705 199.211 854.734 198.072 857.601 197.357C863.888 195.795 870.663 196.283 876.624 198.723" fill="#8E8733"/>
            <path d="M872.552 170.713C864.181 169.086 855.158 171.201 848.35 176.341C846.037 178.098 843.887 180.277 842.878 183.01C841.51 186.621 842.356 190.818 844.343 194.136C845.418 195.925 846.917 197.552 848.904 198.235C851.705 199.211 854.734 198.072 857.601 197.357C863.888 195.795 870.663 196.283 876.624 198.723" stroke="#5F5523" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M986.495 143.419C986.495 143.419 947.569 174.324 873.008 167.753C873.008 167.753 873.986 194.364 876.624 203.603C876.624 203.603 967.895 209.556 1002.55 178.39" fill="#4D58A6"/>
            <path d="M986.495 143.419C986.495 143.419 947.569 174.324 873.008 167.753C873.008 167.753 873.986 194.364 876.624 203.603C876.624 203.603 967.895 209.556 1002.55 178.39" stroke="#303E78" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <rect x="1096" y="168.455" width="88.7727" height="53.5455" fill="#F8C760" stroke="#B47605" stroke-width="7" stroke-linejoin="round"/>
            <line x1="1096" y1="204.409" x2="1186.18" y2="204.409" stroke="#B47605" stroke-width="7"/>
            <line x1="1096" y1="186.091" x2="1186.18" y2="186.091" stroke="#B47605" stroke-width="7"/>
            <path d="M1113.87 129C1139.35 152.107 1161.36 163.66 1183.36 168.281C1129.63 170.13 1104.61 156.728 1098.82 149.796L1113.87 129Z" fill="#F8C760" stroke="#B47605" stroke-width="7" stroke-linejoin="round"/>
            <path d="M1274.89 197.308C1273.63 202.767 1268.13 206.181 1262.64 204.927C1257.15 203.673 1253.72 198.207 1254.98 192.749" fill="#DF6665"/>
            <path d="M1274.89 197.308C1273.63 202.767 1268.13 206.181 1262.64 204.927C1257.15 203.673 1253.72 198.207 1254.98 192.749" stroke="#BD3C41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1274.14 109.901L1255.55 190.346L1275.47 194.892L1294.05 114.447L1274.14 109.901Z" fill="#F8C760" stroke="#B47605" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1287.94 95.4821L1294.04 114.414L1274.16 109.89L1287.94 95.4821Z" fill="#CB8F66" stroke="#B86F3C" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1283.83 99.7442C1284.69 100.269 1285.62 100.739 1286.64 100.967C1287.67 101.196 1288.72 101.237 1289.69 101.11L1287.9 95.509L1283.8 99.7714L1283.83 99.7442Z" fill="#2D2926" stroke="#2D2926" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1258.15 179.081L1255.55 190.325L1275.47 194.871L1278.06 183.627L1258.15 179.081Z" fill="#F2E8E4" stroke="#B0A7A5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1240.87 103.562L1251.76 101.848L1250.74 95.4538L1238.81 90.6355L1240.87 103.562Z" fill="#DF6665" stroke="#BD3C41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1254.77 101.373C1255.93 117.807 1263.91 120.413 1263.91 120.413L1249.51 122.68L1235.08 124.953C1235.08 124.953 1241.86 120.024 1237.85 104.037L1254.81 101.368L1254.77 101.373Z" fill="#2D2926" stroke="#2D2926" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1272.43 196.701L1250.69 200.124L1235.58 128.098L1264.41 123.558L1272.43 196.701Z" fill="#DF6665" stroke="#BD3C41" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1229.84 138.557H1298.3V210.486C1298.3 217.737 1293.15 223.64 1286.82 223.64H1241.32C1234.99 223.64 1229.84 217.737 1229.84 210.486V138.557Z" fill="#A7A8AA" stroke="#54565A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg v-else class="robert-desk" width="100%" viewBox="0 0 368 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1346_1671)">
                <path d="M179.46 103.302L261.478 103.302C273.748 103.302 283.695 93.3544 283.695 81.0841V50.7793C283.695 38.509 273.748 28.5619 261.478 28.5619L179.46 28.5619C167.189 28.5619 157.242 38.509 157.242 50.7793V81.0841C157.242 93.3544 167.189 103.302 179.46 103.302Z" fill="#615A58" stroke="#4A4544" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M179.46 103.302L261.478 103.302C273.748 103.302 283.695 93.3544 283.695 81.0841V50.7793C283.695 38.509 273.748 28.5619 261.478 28.5619L179.46 28.5619C167.189 28.5619 157.242 38.509 157.242 50.7793V81.0841C157.242 93.3544 167.189 103.302 179.46 103.302Z" fill="#615A58" stroke="#4A4544" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M137.039 110.199L130.432 114.395C129.989 114.685 129.394 114.395 129.333 113.876L128.921 110.351C128.875 110.016 128.616 109.756 128.28 109.726L125.35 109.436C124.938 109.39 124.648 109.024 124.709 108.612L125.35 104.522C125.411 104.156 125.182 103.805 124.816 103.713L121.627 102.905C121.124 102.767 120.91 102.157 121.246 101.76L129.302 95.5193" fill="#8E8733"/>
                <path d="M137.039 110.199L130.432 114.395C129.989 114.685 129.394 114.395 129.333 113.876L128.921 110.351C128.875 110.016 128.616 109.756 128.28 109.726L125.35 109.436C124.938 109.39 124.648 109.024 124.709 108.612L125.35 104.522C125.411 104.156 125.182 103.805 124.816 103.713L121.627 102.905C121.124 102.767 120.91 102.157 121.246 101.76L129.302 95.5193" stroke="#5E5523" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M180.497 78.6121C180.497 78.6121 147.186 105.697 137.619 110.031C137.619 110.031 130.615 99.685 129.043 95.4582C129.043 95.4582 162.583 72.4931 165.452 68.9072" fill="#4D58A6"/>
                <path d="M180.497 78.6121C180.497 78.6121 147.186 105.697 137.619 110.031C137.619 110.031 130.615 99.685 129.043 95.4582C129.043 95.4582 162.583 72.4931 165.452 68.9072" stroke="#303E78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M265.888 110.916C265.888 110.916 266.712 141.846 203.248 141.846C139.785 141.846 153.091 115.021 153.091 115.021L265.888 110.916Z" fill="#8E8733" stroke="#5E5523" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M213.243 63.9785V121.384L206.407 123.764H174.576L172.242 81.1451" fill="#F2E8E4"/>
                <path d="M213.243 63.9785V121.384L206.407 123.764H174.576L172.242 81.1451" stroke="#B0A7A5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M172.242 81.1451L174.592 123.764C174.592 123.764 154.709 124.634 149.75 122.238L158.325 74.0801L172.242 81.1451Z" fill="#4D58A6" stroke="#303E78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M194.398 19.4367C194.398 19.4367 187.165 6.95471 173.661 9.94551C160.157 12.9516 158.646 29.2179 158.646 29.2179" fill="#8E8733"/>
                <path d="M194.398 19.4367C194.398 19.4367 187.165 6.95471 173.661 9.94551C160.157 12.9516 158.646 29.2179 158.646 29.2179" stroke="#5E5523" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M167.695 25.6321C167.695 29.4317 170.777 32.514 174.576 32.514C178.376 32.514 181.458 29.4317 181.458 25.6321C181.458 21.8326 178.376 18.7502 174.576 18.7502C170.777 18.7502 167.695 21.8326 167.695 25.6321Z" fill="#2D2926"/>
                <path d="M246.417 36.9697C246.417 36.9697 242.282 30.6066 237.612 26.5934C235.491 24.7623 235.69 12.2193 222.963 9.47262C210.237 6.72597 204.927 16.7665 198.259 18.6434C191.606 20.5203 151.627 25.0981 144.821 40.8761C140.579 50.7183 136.215 73.0119 185.929 85.1278C235.659 97.2588 246.417 36.9544 246.417 36.9544" fill="#8E8733"/>
                <path d="M246.417 36.9697C246.417 36.9697 242.282 30.6066 237.612 26.5934C235.491 24.7623 235.69 12.2193 222.963 9.47262C210.237 6.72597 204.927 16.7665 198.259 18.6434C191.606 20.5203 151.627 25.0981 144.821 40.8761C140.579 50.7183 136.215 73.0119 185.929 85.1278C235.659 97.2588 246.417 36.9544 246.417 36.9544" stroke="#5E5523" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M213.045 28.5618C213.045 32.3614 216.127 35.4437 219.927 35.4437C223.726 35.4437 226.809 32.3614 226.809 28.5618C226.809 24.7623 223.726 21.6799 219.927 21.6799C216.127 21.6799 213.045 24.7623 213.045 28.5618Z" fill="#2D2926"/>
                <path d="M178.513 36.6797L177.644 39.0296" stroke="#2D2926" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M170.838 36.4509L170.731 38.8314" stroke="#2D2926" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M195.878 50.1079C165.68 52.1679 143.509 50.1079 143.509 50.1079" stroke="#2D2926" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M220.461 94.97L213.243 63.9785L190.69 81.1451L186.021 97.0452" fill="#F2E8E4"/>
                <path d="M220.461 94.97L213.243 63.9785L190.69 81.1451L186.021 97.0452" stroke="#B0A7A5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M248.233 36.512L210.115 66.42C210.115 66.42 202.974 119.141 206.407 123.749C206.407 123.749 262.79 123.337 270.74 113.54C270.74 113.54 270.74 58.2105 248.233 36.512Z" fill="#4D58A6" stroke="#303E78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M190.873 94.1458L195.65 103.225C195.741 103.408 195.756 103.622 195.665 103.82L187.822 121.826C187.593 122.36 186.83 122.375 186.586 121.857L177.369 102.905C177.278 102.722 177.278 102.493 177.369 102.31L181.489 93.7338C181.611 93.4897 181.871 93.3371 182.145 93.3524L190.309 93.7949C190.553 93.7949 190.767 93.9475 190.873 94.1611" fill="#DF6665"/>
                <path d="M190.873 94.1458L195.65 103.225C195.741 103.408 195.756 103.622 195.665 103.82L187.822 121.826C187.593 122.36 186.83 122.375 186.586 121.857L177.369 102.905C177.278 102.722 177.278 102.493 177.369 102.31L181.489 93.7338C181.611 93.4897 181.871 93.3371 182.145 93.3524L190.309 93.7949C190.553 93.7949 190.767 93.9475 190.873 94.1611" stroke="#BD3C41" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M177.491 81.1452C180.619 78.78 194.826 81.1452 194.826 81.1452C194.826 81.1452 194.017 89.8124 191.728 94.0087C191.728 94.0087 185.365 96.1755 180.284 94.0087C180.284 94.0087 176.164 82.1523 177.491 81.1452Z" fill="#DF6665"/>
                <path d="M177.491 81.1452C180.619 78.78 194.826 81.1452 194.826 81.1452C194.826 81.1452 194.017 89.8124 191.728 94.0087C191.728 94.0087 185.365 96.1755 180.284 94.0087C180.284 94.0087 176.164 82.1523 177.491 81.1452Z" fill="#DF6665" stroke="#BD3C41" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M193.437 109.588H163.59C163.59 101.272 170.334 94.5276 178.651 94.5276H181.413C188.05 94.5276 193.437 99.914 193.437 106.552V109.588Z" fill="#A7A8AA" stroke="#54565A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M185.517 87.4167C181.596 86.6537 177.369 87.6455 174.18 90.0565C173.096 90.8805 172.089 91.9029 171.616 93.1846C170.975 94.8784 171.372 96.8468 172.303 98.4033C172.807 99.2425 173.508 100.005 174.439 100.326C175.752 100.784 177.171 100.25 178.513 99.9139C181.458 99.1815 184.632 99.4104 187.425 100.555" fill="#8E8733"/>
                <path d="M185.517 87.4167C181.596 86.6537 177.369 87.6455 174.18 90.0565C173.096 90.8805 172.089 91.9029 171.616 93.1846C170.975 94.8784 171.372 96.8468 172.303 98.4033C172.807 99.2425 173.508 100.005 174.439 100.326C175.752 100.784 177.171 100.25 178.513 99.9139C181.458 99.1815 184.632 99.4104 187.425 100.555" stroke="#5E5523" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M238.894 74.5989C238.894 74.5989 220.659 89.0951 185.731 86.0128C185.731 86.0128 186.189 98.4948 187.425 102.828C187.425 102.828 230.181 105.621 246.417 91.0025" fill="#4D58A6"/>
                <path d="M238.894 74.5989C238.894 74.5989 220.659 89.0951 185.731 86.0128C185.731 86.0128 186.189 98.4948 187.425 102.828C187.425 102.828 230.181 105.621 246.417 91.0025" stroke="#303E78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M364.842 230H0.842407V113H364.842V230Z" fill="#CB8F66" stroke="#B86F3C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M152.039 98.6309H52.0145V110.457H152.039V98.6309Z" fill="#A7A8AA" stroke="#54565A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M114.318 50H39.212V110.457H114.318V50Z" fill="#A7A8AA" stroke="#54565A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M80.0458 85.7522C75.7732 90.0248 67.106 88.2547 67.106 88.2547C67.106 88.2547 65.3512 79.5722 69.6085 75.3149C73.8811 71.0423 82.5483 72.8124 82.5483 72.8124C82.5483 72.8124 84.3031 81.4949 80.0458 85.7522Z" fill="#F2E8E4" stroke="#54565A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M67.1058 88.2548L74.827 80.5337" stroke="#54565A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M342.27 98.6208C341.68 101.187 339.111 102.792 336.545 102.203C333.978 101.613 332.373 99.0435 332.963 96.4773" fill="#DF6665"/>
                <path d="M342.27 98.6208C341.68 101.187 339.111 102.792 336.545 102.203C333.978 101.613 332.373 99.0435 332.963 96.4773" stroke="#BD3C41" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M341.917 57.5275L333.232 95.3474L342.539 97.4847L351.224 59.6647L341.917 57.5275Z" fill="#F8C760" stroke="#B47605" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M348.368 50.7488L351.221 59.6493L341.927 57.5224L348.368 50.7488Z" fill="#CB8F66" stroke="#B86F3C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M346.448 52.7526C346.849 52.9992 347.283 53.2202 347.762 53.3277C348.241 53.4351 348.731 53.4544 349.187 53.3946L348.352 50.7615L346.432 52.7653L346.448 52.7526Z" fill="#2D2926" stroke="#2D2926" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M334.445 90.0514L333.231 95.3376L342.538 97.4749L343.752 92.1887L334.445 90.0514Z" fill="#F2E8E4" stroke="#B0A7A5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M326.368 54.5476L331.457 53.7417L330.981 50.7355L325.406 48.4702L326.368 54.5476Z" fill="#DF6665" stroke="#BD3C41" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M332.866 53.5184C333.41 61.2445 337.138 62.4697 337.138 62.4697L330.408 63.5355L323.662 64.604C323.662 64.604 326.829 62.2867 324.959 54.7706L332.882 53.5158L332.866 53.5184Z" fill="#2D2926" stroke="#2D2926" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M341.119 98.3354L330.959 99.9447L323.896 66.0828L337.372 63.9484L341.119 98.3354Z" fill="#DF6665" stroke="#BD3C41" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M321.212 71H353.212V104.816C353.212 108.225 350.804 111 347.847 111H326.577C323.62 111 321.212 108.225 321.212 104.816V71Z" fill="#A7A8AA" stroke="#54565A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="271.212" y="88" width="38" height="23" fill="#F8C760" stroke="#B47605" stroke-width="4" stroke-linejoin="round"/>
                <line x1="271.212" y1="103" x2="310.212" y2="103" stroke="#B47605" stroke-width="4"/>
                <line x1="271.212" y1="95" x2="310.212" y2="95" stroke="#B47605" stroke-width="4"/>
                <path d="M278.712 71C289.712 81 299.212 86 308.712 88C285.512 88.8 274.712 83 272.212 80L278.712 71Z" fill="#F8C760" stroke="#B47605" stroke-width="4" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1346_1671">
                <rect width="368" height="232" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            
            <div class="scroll-hint">
                <span class="scroll-text">scroll to read case study</span>
                <div class="scroll-line"></div>
            </div>
        </div>

    </div>

    <div :class="[mobileView ? 'poster-div-m' : 'poster-div']">
        <div class="row specs-row" v-if="!mobileView">
            <div class="col l3 offset-l1 m3" >
                <ul class="specs">
                    <li><p class="specs-title">Project Type:</p></li>
                    <li><p class="specs-list">Personal</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Strategies:</p></li>
                    <li><p class="specs-list">UI/UX Design, Motion Design</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Timeline:</p></li>
                    <li><p class="specs-list">18 - 20 March 2026</p></li>
                </ul>
            </div>
            <div class="col l3 offset-l1 m3">
                <ul class="specs">
                    <li><p class="specs-title">Tools Used:</p></li>
                    <li><p class="specs-list">Figma, After Effects, Claude</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="col s12 col-list">
            <p class="specs-list-m"><text class="specs-title-m">Project Type:</text> Personal</p>
            <p class="specs-list-m"><text class="specs-title-m">Strategies:</text> UI/UX Design, Motion Design</p>
            <p class="specs-list-m"><text class="specs-title-m">Timeline:</text> 18 - 20 March 2026</p>
            <p class="specs-list-m"><text class="specs-title-m">Tools used:</text> Figma, After Effects, Claude</p>
        </div>

        <div class="see-more-div">
            <text :class="[mobileView ? 'sm-title-m' : 'sm-title']">See More Projects</text> 
            <see-more-categories :pageType="category"/>
        </div>
        <contact-me/>
    </div>
</template>

<script>
import SeeMoreCategories from "../components/SeeMoreCategories.vue";
import ContactMe from "../components/ContactMe.vue";

export default ({
    name: "stick-it-robert",
    components: { SeeMoreCategories, ContactMe },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        window.addEventListener('scroll', this.reveal);
    },

    data () {
        return {
            mobileView: null,
            windowWidth: null,
            category: "wormsquirm",
        }
    },

    methods : {
        checkScreen () {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750){
                this.mobileView= true;
                return;
            }
            this.mobileView = false;
        },

        openWidget() {
            window.open(
            'https://stick-it-with-robert.vercel.app',
            'roberts-desk',
            'width=360,height=480,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no'
            )
        },

        reveal () {
            var reveals = document.querySelectorAll(".reveal")

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
}
            }           
        },
    }
})
</script>

<style scoped>
.siwr {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #FEECBF;
    height: 100%;
}
.main-header {
    margin-top: 100px;
    font-size: 80px;
    font-family: 'Lexend';
    font-weight: 600;
    color: #2F2A1B;
    text-align: center; 
}

.main-header-m {
    margin-top: 100px;
    font-size: 48px;
    font-family: 'Lexend';
    font-weight: 600;
    color: #2F2A1B;
    text-align: center; 
}
.open-button {
    cursor: pointer;
    background: #F8C760;
    border: 4px solid #B47605;
    border-radius: 100px;
    color: #2D2926;
    font-family: 'Lexend';
    font-weight: 500;
    font-size: 24px;
    padding: 18px 100px;
    margin-top: 80px;
    transition: background 0.3s ease, transform 0.3s ease;
}

.open-button:hover {
    background: #F3B42D;
    transform: translateY(-2px);
}

@media (max-width: 750px) {
    .open-button {
        font-size: 18px;
        padding: 12px 64px;
        border-width: 4px;
    }
}

.robert-desk{
    margin-top: 100px;
    display: block;
}

.desk-scene {
  position: relative;
  align-items: center;
}

.scroll-hint {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  bottom: 0;  
  display: none; /* REMOVE when case study is done */

}

.scroll-text {
  font-family: 'Lexend';
  font-weight: 500;
  font-size: 18px;
  color: #2D2926;
}

.scroll-line {
  width: 6px;
  height: 56px;
  background: #B86F3C;
  margin-bottom: 0px;
  border-radius: 3px 3px 0 0;
}


.introduction {
    margin-top: 12px;
    font-size: 20px;
    line-height: 26px;
    font-family: 'Lexend';
    font-weight: 400;
    text-align: center; 
}

.introduction-m {
    font-family: 'Lexend';
    font-weight: 400;    
    margin: 48px 48px 0px 12px;
    text-align: center;
    font-size: 18px;
}

#robert-mouse {
  animation: move-mouse ease-in-out 1s alternate infinite;
}

@keyframes move-mouse {
  from {
    transform: translateX(0px)
  }
  to {
    transform: translateX(10px)
  }
}

</style>