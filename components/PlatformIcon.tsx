import { Globe } from "lucide-react";
import { JSX } from "react";

function PlatformIcon({ platform }: { platform: string }) {
    const platformIcons: Record<string, JSX.Element> = {
      leetcode: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
          ></path>
        </svg>
      ),
      codeforces: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5z"
          ></path>
        </svg>
      ),
      geeksforgeeks: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
          />
        </svg>
      ),
      codechef: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M11.007 0c-.787.031-1.515.37-2.222.685a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.439-.529.662-.309.486-.448 1.067-.457 1.638.036.61.216 1.2.376 1.786.368 1.262.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.416.197.394.35.808.535 1.206.027.067.052.158.142.149.136-.012.243-.115.368-.164.828-.414 1.74-.642 2.655-.749.708-.074 1.43-.078 2.131.054.72.163 1.417.426 2.092.724.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.976.495-1.061.522-2.279 1.038-3.331.358-.721.892-1.337 1.266-2.048.175-.266.431-.467.588-.747.437-.669.78-1.398 1.05-2.15.102-.293.172-.612.09-.919-.06-.299-.202-.57-.318-.848a2.481 2.481 0 00-.278-.66c-.407-.676-1.07-1.149-1.743-1.536-1.045-.59-2.196-.969-3.351-1.28A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.223-.363.569-.468.883-.168.568-.263 1.163-.207 1.756.064 1.062.197 2.12.33 3.175.18 1.352.387 2.7.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.317c-.025-.843-.004-1.726.37-2.501.118-.226.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.159.168.252.266.798.422 1.628.679 2.428.174.649.238 1.323.308 1.991.097 1.039.108 2.085.246 3.12.026.199.082.393.119.59.01.067-.059.049-.083.014-.148-.161-.183-.391-.246-.592-.16-.645-.242-1.305-.334-1.962-.174-1.316-.287-2.64-.529-3.945-.158-.612-.356-1.215-.46-1.838.006-.051.093-.048.132-.058zM4.589 3.607c.229.056.365.268.512.434.4.535.54 1.204.695 1.843.283 1.265.446 2.553.725 3.82.131.666.293 1.326.507 1.971.014.051.035.133.038.17-.233-.43-.393-.896-.565-1.353-.598-1.698-.823-3.496-1.3-5.228-.133-.478-.308-.95-.596-1.358-.047-.088-.08-.204-.037-.297.006-.004.014-.003.02-.002zm12.646 13.196c-.136.007-.31.11-.276.267.094.218.334.308.526.416.441.216.938.29 1.358.546.092.06.149.197.064.287-.18.266-.47.44-.723.634-.372.266-.777.51-1.057.879-.066.107-.041.267.082.32.109.079.243.018.338-.051.518-.294.995-.654 1.478-1.002.32-.239.644-.477.926-.76.085-.135-.03-.274-.118-.371-.273-.285-.62-.487-.965-.67a4.959 4.959 0 00-1.458-.495 1.251 1.251 0 00-.175 0zM5.96 16.83c-.527.134-.997.42-1.474.673-.425.243-.854.496-1.205.841a.699.699 0 00-.172.488c.065.108.2.14.301.206.852.442 1.735.822 2.63 1.168.132.042.265.113.406.107.158-.02.309-.204.213-.356-.146-.243-.42-.361-.65-.506-.547-.303-1.154-.512-1.636-.918-.046-.091.094-.128.142-.18.549-.395 1.229-.593 1.713-1.077.089-.09.164-.259.048-.358-.086-.073-.206-.087-.316-.088zm8.115.793c-.43.027-.835.431-.774.876.032.259.089.525.228.749.12.18.33.286.546.287.273.031.59-.059.726-.318.137-.237.212-.514.205-.787-.038-.46-.466-.845-.93-.807zm-4.49.01c-.464.028-.807.505-.77.953.011.444.315.902.765.994.352.06.71-.19.803-.53.125-.35.132-.761-.044-1.095-.157-.25-.478-.327-.754-.322zm.112.653c.241.064.294.47.045.558-.141.034-.239-.12-.234-.244-.008-.127.05-.287.189-.314zm4.437.143c.097 0 .226.071.19.187-.013.171-.215.333-.377.226-.132-.07-.172-.296-.02-.368a.418.418 0 01.207-.045zm-3.518 2.977c-.553.051-1.044.335-1.542.559-.304.156-.662.312-1.005.187-.377-.12-.707-.35-1.059-.52-.075-.013-.061.077-.047.122.081.53.129 1.102.454 1.55.338.437.902.618 1.433.667.797.072 1.642-.118 2.271-.629.309-.262.571-.631.585-1.049-.006-.324-.244-.596-.524-.734a1.085 1.085 0 00-.566-.153zm2.58.008c-.396.052-.815.262-.972.65-.129.358.034.748.272 1.02.426.509 1.07.793 1.718.884.577.078 1.186.014 1.714-.24.438-.225.767-.655.85-1.142.064-.291.081-.59.124-.884-.066-.078-.148.038-.218.052-.337.142-.647.367-1.01.435-.363.024-.687-.172-1.015-.293-.43-.178-.851-.403-1.315-.478a1.21 1.21 0 00-.147-.004zm-2.881-5.091c-.07 0-.143.014-.216.03a2.93 2.93 0 00-.454.152c-.15.061-.292.127-.407.18a4.07 4.07 0 01-.218.092.277.277 0 01-.182-.034c-.062-.037-.12-.101-.141-.255l-.27.038c.031.218.14.37.27.45.13.079.268.09.378.067.085-.018.16-.058.276-.111.116-.053.255-.118.397-.176.143-.058.288-.11.41-.138a.52.52 0 01.252-.009c.14.06.19.13.215.179.025.05.03.067.03.067l.263-.06s.002-.024-.05-.128a.678.678 0 00-.35-.307.482.482 0 00-.204-.037zm2.744 3.937a.136.136 0 00-.102.05s-.122.148-.286.295c-.165.148-.38.28-.493.283-.112.003-.314-.118-.47-.26-.155-.14-.267-.284-.267-.284a.136.136 0 10-.214.167s.124.16.299.319c.175.16.397.337.66.33.259-.008.484-.19.666-.352.182-.163.315-.325.315-.325a.136.136 0 00-.108-.223zM11.007.001c-.787.03-1.515.368-2.222.684a12.27 12.27 0 01-1.864.703c-.635.176-1.3.354-1.814.788-.222.18-.356.44-.529.663-.309.485-.448 1.066-.457 1.637.036.61.216 1.2.376 1.786.368 1.263.807 2.503 1.197 3.759.366 1.161.703 2.344 1.294 3.417.197.393.35.807.535 1.205.027.067.052.158.142.15.136-.013.243-.116.368-.165.828-.414 1.74-.641 2.655-.749.708-.074 1.43-.078 2.131.055.72.163 1.417.425 2.092.723.36.172.719.348 1.088.498.048.04.135.058.16-.016.219-.327.469-.635.667-.975.495-1.062.522-2.28 1.038-3.332.358-.721.892-1.336 1.266-2.047.175-.266.431-.468.588-.747.437-.67.78-1.4 1.05-2.151.102-.293.172-.612.09-.919-.06-.298-.202-.57-.318-.848a2.481 2.481 0 00-.278-.659c-.407-.676-1.07-1.15-1.743-1.536-1.045-.591-2.196-.97-3.351-1.281A20.733 20.733 0 0011.426.01a5.005 5.005 0 00-.42-.01zm-.889.606c-.261.222-.363.568-.468.883-.168.567-.263 1.163-.207 1.755.064 1.062.197 2.12.33 3.175.18 1.352.387 2.701.677 4.034.026.165.064.347.05.51-.115-.175-.182-.383-.258-.58-.25-.765-.432-1.549-.604-2.334a26.008 26.008 0 01-.562-4.316c-.025-.844-.004-1.727.37-2.502.118-.225.259-.46.48-.597a.411.411 0 01.218-.049l-.026.02zM6.516 1.77c.128 0 .139.16.168.252.266.798.422 1.628.679 2.429.174.648.238 1.322.308 1.99.097 1.04.108 2.086.246 3.12.026.199.082.394.119.59.01.068-.059.05-.083.014-.148-.16-.183-.39-.246-.592-.16-.645-.242-1.304-.334-1.962-.174-1.315-.287-2.64-.529-3.945-.158-.612-.356-1.215-.46-1.838.006-.051.093-.048.132-.058zM4.589 3.608c.229.055.365.267.512.433.4.535.54 1.204.695 1.843.283 1.265.446 2.554.725 3.82.131.666.293 1.327.507 1.971.014.051.035.133.038.17-.233-.43-.393-.896-.565-1.352-.598-1.7-.823-3.497-1.3-5.23-.133-.477-.308-.95-.596-1.357-.047-.087-.08-.204-.037-.296.006-.004.014-.003.02-.002zm12.646 13.195c-.136.007-.31.11-.276.268.094.217.334.307.526.416.441.215.938.289 1.358.545.092.06.149.197.064.287-.18.267-.47.44-.723.634-.372.266-.777.51-1.057.879-.066.107-.041.267.082.32.109.079.243.019.338-.05.518-.295.995-.655 1.478-1.002.32-.24.644-.478.926-.761.085-.135-.03-.274-.118-.37-.273-.286-.62-.488-.965-.672a4.959 4.959 0 00-1.458-.493 1.251 1.251 0 00-.175-.001zm-11.276.029c-.527.133-.997.42-1.474.672-.425.243-.854.497-1.205.842a.699.699 0 00-.172.487c.065.109.2.14.301.206.852.442 1.735.823 2.63 1.168.132.042.265.113.406.108.158-.02.309-.205.213-.357-.146-.243-.42-.361-.65-.506-.547-.303-1.154-.512-1.636-.918-.046-.09.094-.128.142-.18.549-.394 1.229-.592 1.713-1.077.089-.09.164-.258.048-.357-.086-.074-.206-.088-.316-.088zm8.115.792c-.43.028-.835.432-.774.876.032.26.089.526.228.75.12.179.33.285.546.287.273.03.59-.06.726-.319.137-.236.212-.514.205-.787-.038-.46-.466-.844-.93-.807zm-4.49.01c-.464.028-.807.505-.77.953.011.444.315.902.765.995.352.059.71-.19.803-.53.125-.35.132-.762-.044-1.096-.157-.249-.478-.327-.754-.322zm.112.654c.241.063.294.47.045.557-.141.034-.239-.12-.234-.244-.008-.127.05-.287.189-.313zm4.437.142c.097 0 .226.072.19.187-.013.172-.215.333-.377.227-.132-.071-.172-.297-.02-.369a.418.418 0 01.207-.045zm-3.518 2.977c-.553.052-1.044.336-1.542.56-.304.155-.662.311-1.005.186-.377-.119-.707-.35-1.059-.52-.075-.012-.061.078-.047.122.081.53.129 1.102.454 1.55.338.438.902.619 1.433.667.797.072 1.642-.118 2.271-.629.309-.262.571-.63.585-1.049-.006-.324-.244-.596-.524-.734a1.085 1.085 0 00-.566-.153zm2.58.008c-.396.052-.815.262-.972.65-.129.359.034.748.272 1.021.426.508 1.07.792 1.718.883.577.078 1.186.015 1.714-.24.438-.225.767-.655.85-1.142.064-.29.081-.59.124-.884-.066-.077-.148.039-.218.052-.337.143-.647.367-1.01.436-.363.024-.687-.172-1.015-.294-.43-.178-.851-.402-1.315-.477a1.21 1.21 0 00-.147-.004z" />
        </svg>
      ),
    };
  
    return (
      platformIcons[platform.toLowerCase()] || (
        <Globe className="w-6 h-6 text-blue-400" />
      )
    );
  }

  export default PlatformIcon;