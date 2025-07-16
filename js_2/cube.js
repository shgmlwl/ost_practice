document.addEventListener("DOMContentLoaded",()=>{
/*정육면체 인터랙션*/
const cube = document.querySelector(".cube");
const layout = document.querySelector("#layout");

let drag = false; /* 드래그 중인지 확인 */

let import_x = -30; /* 현재 큐브의 회전 상태 저장 => 각도 */
let import_y = 30;

let client_x = 0; /* 드래그 시작시 마우스 좌표 => 이전 프레임의 마우스 위치 저장 */
let client_y = 0;

//다중 이벤트 처리 => 데스크탑,모바일 모두 적용되도록
/* 드래그 시작 */
const start_drag = (event)=>{
    drag = true; /* 드래그 중이다. */
    if(event.type === "touchstart"){
        client_x = event.touches[0].clientX; /*clientX=> 좌표에서 얼만큼 떨어졌는지 계산  */
        client_y = event.touches[0].clientY; 

        /* event.preventDefault(); */
    }else{
        client_x = event.clientX; /* 클릭한 위치 X 저장 */
        client_y  = event.clientY; /* 클릭한 위치 Y 저장 */
    }
    layout.style.cursor = "grabbing";
};

//드래그 끝
const end_drag = ()=>{
    drag = false;
    layout.style.cursor = "grab";
    /* 이벤트가 끝나서 커서 스타일도 변경됨 => 드래그 실행안됨 */
}

// 드래그 중 이동처리
const grabbing_move = (e)=>{
    if(!drag) return; /* 드래그를 실행하지 않았으면, 즉시 종료해라 */

    let current_x_pos;
    let current_y_pos;

    if(e.type === "touchmove"){
        current_x_pos = e.touches[0].clientX;
        current_y_pos = e.touches[0].clientY;
        e.preventDefault();
        
    }else{
        current_x_pos = e.clientX;
        current_y_pos = e.clientY;
    }

    const delata_x = current_x_pos - client_x; /* 마우스 또는 손가락이 얼마나 이동했는지 계산하는 역할 */
    const delata_y = current_y_pos - client_y;

    import_x = current_x_pos;
    import_y = current_y_pos;

    const move_x = Math.min(Math.max(delata_x, - 50),50);
    const move_y = Math.min(Math.max(delata_y, - 50),50);

    //회전 각도를 이동량에 맞춰 누적 업데이트
    import_x -= move_y * 0.5;
    import_y += move_x * 0.5;

    cube.style.transform = `rotateX(${import_x}deg) rotateY(${import_y}deg)`;

    /* 좌표 업데이트 */
    client_x = current_x_pos;
    client_y = current_y_pos;
};

    //마우스 이벤트
    layout.addEventListener("mousedown", start_drag);
    window.addEventListener("mouseup", end_drag);
    window.addEventListener("mousemove",grabbing_move);

    layout.addEventListener("touchstart", start_drag, {passive : false});
    window.addEventListener("touchend", end_drag);
    window.addEventListener("touchmove",grabbing_move , {passive : false});


/* index본 페이지에 입력한 정보 이어서*/
    const images = JSON.parse(localStorage.getItem("cube_images"));

    if(images && images.length >= 6){
        images.forEach((src,idx)=>{
            const face = document.querySelector(`#cube_content_${idx + 1} img`);
            if(face) face.src = src;
        });
    }else{
       return;
    }

    /*큐브의 이미지에 따라서 각 해당 제품이 보인다.*/
    const follow_img = localStorage.getItem("image_thumnail");
    const $info_map = document.querySelector(".info_map img");
    /* console.log($info_map); */
    console.log("follow_img:", follow_img);

    if(follow_img){
      $info_map.src = follow_img;
    }else{
        return;
    }

    /* 제품 항목의 큐브를 만지면, 해당 제품이 보인다.*/
    /* 데스크탑/모바일 => 모두 가능하게 */
    const follow_map = document.querySelector(".info_map");
    let follow_drag = false;
    const move_img = (e) =>{
        if(e.type === "touchmove"){
            follow_drag = true;
            const touch = e.touches[0];
            const tocuh_x = touch.clientX + 20;
            const tocuh_y = touch.clientY + 20;
            follow_map.style.left = `${tocuh_x}px`;
            follow_map.style.top = `${tocuh_y }px`;
        }else{
                const x = e.clientX + 20;
                const y = e.clientY + 20;
                follow_map.style.left = `${x}px`;
                follow_map.style.top = `${y}px`;
        }
    }

    /* 데스크탑 */
    cube.addEventListener("mouseenter",()=>{
        follow_map.style.display = "block";
    });

      cube.addEventListener("mouseleave",()=>{
        follow_map.style.display = "none";
    });

    cube.addEventListener("mousemove",move_img);

    /* 모바일 */
       cube.addEventListener("touchstart",()=>{
        follow_map.style.display = "block";
    },{passive : true});

      cube.addEventListener("touchend",()=>{
        follow_map.style.display = "none";
    },{passive : true});

    cube.addEventListener("touchmove",move_img);


    /* 큐브를 돌릴 때 해당 이미지의 alt 속성을 가져와서 title로 뜨게 한다. */
    const img_alt = localStorage.getItem("img_alt");
    console.log(img_alt);
    const img_title = document.querySelector(".alt_title");
    cube.addEventListener("mouseenter",()=>{
        if(img_alt){
            img_title.textContent = img_alt;
        }else{
            return;
        }
    });

    cube.addEventListener("mouseleave",()=>{
        img_title.textContent = ""; /* 아무것도 안뜨게 된다. */
    });


    /* 배경을 클릭하면, 다시 본 페이지로 돌아간다. index2.html => index.html */
    layout.addEventListener("click",e=>{
        if(!cube.contains(e.target)){
            window.location.href ="index.html#accessory";
        };
    });

    














}); //js end