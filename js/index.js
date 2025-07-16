     document.addEventListener("DOMContentLoaded",()=>{

        /* 버튼 항목에 대한 js */
        const buttons = document.querySelectorAll(".header_menu button");
        const button_contents = document.querySelectorAll(".button_contents > div");

       buttons.forEach(btn=>{
        btn.addEventListener("click",()=>{
            const selected = btn.dataset.menu;
            button_contents.forEach(content=>{
                content.classList.remove("act");
                if(content.dataset.menu === selected){
                    content.classList.add("act");
                }
            });
        });
       });

       /* 초기설정 */
       button_contents.forEach(c=>{
        if(c.dataset.menu === "accessory"){
            c.classList.add("act");
        }else{
            c.classList.remove("act");
        }
       });

       /* 초기 버튼 색 적용 */
       buttons.forEach(btn=>{
        if(btn.dataset.menu === "accessory"){
            btn.classList.add("color");
        }else{
            btn.classList.remove("color");
        }
       })
       /* 버튼 눌렀을 떄 색 적용 */
       buttons.forEach(b=>{
        b.addEventListener("click",e=>{
            buttons.forEach(j=>{
            const current_target = e.currentTarget.dataset.menu;
            if(j.dataset.menu === current_target){
                j.classList.add("color");
            }else{j.classList.remove("color");}
            });
            
        });
       });



       /*악세서리 버튼 항목*/

       /* 호버 사진 세팅 => 이미지 사진 이름이 다 다르다고 가정했을 때*/
       const Necklace_contents = {
            "목걸이 이미지1" : "images/nek_img/nek_hover_1.jpg",
            "목걸이 이미지2" : "images/nek_img/nek_hover_2.jpg",
            "목걸이 이미지3" : "images/nek_img/nek_hover_3.jpg",
            "목걸이 이미지4" : "images/nek_img/nek_hover_4.jpg",
            "목걸이 이미지5" : "images/nek_img/nek_hover_5.jpg",
            "목걸이 이미지6" : "images/nek_img/nek_hover_6.jpg",
            "목걸이 이미지7" : "images/nek_img/nek_hover_7.jpg",
            "목걸이 이미지8" : "images/nek_img/nek_hover_8.jpg",
            "목걸이 이미지9" : "images/nek_img/nek_hover_9.jpg",
            "목걸이 이미지10" : "images/nek_img/nek_hover_10.jpg",
            "목걸이 이미지11" : "images/nek_img/nek_hover_11.jpg",
            "목걸이 이미지12" : "images/nek_img/nek_hover_12.jpg",
            "목걸이 이미지13" : "images/nek_img/nek_hover_13.jpg",
            "목걸이 이미지14" : "images/nek_img/nek_hover_14.jpg",
            "목걸이 이미지15" : "images/nek_img/nek_hover_15.jpg",
            "목걸이 이미지16" : "images/nek_img/nek_hover_16.jpg"
       }

         const Bracelet_contents = {
            "팔찌 이미지1" : "images/hands_img/hands_hover_1.jpg",
            "팔찌 이미지2" : "images/hands_img/hands_hover_2.jpg",
            "팔찌 이미지3" : "images/hands_img/hands_hover_3.jpg",
            "팔찌 이미지4" : "images/hands_img/hands_hover_4.jpg",
            "팔찌 이미지5" : "images/hands_img/hands_hover_5.jpg",
            "팔찌 이미지6" : "images/hands_img/hands_hover_6.jpg",
            "팔찌 이미지7" : "images/hands_img/hands_hover_7.jpg",
            "팔찌 이미지8" : "images/hands_img/hands_hover_8.jpg",
            "팔찌 이미지9" : "images/hands_img/hands_hover_9.jpg",
            "팔찌 이미지10" : "images/hands_img/hands_hover_10.jpg",
            "팔찌 이미지11" : "images/hands_img/hands_hover_11.jpg",
            "팔찌 이미지12" : "images/hands_img/hands_hover_12.jpg",
            "팔찌 이미지13" : "images/hands_img/hands_hover_13.jpg",
            "팔찌 이미지14" : "images/hands_img/hands_hover_14.jpg",
            "팔찌 이미지15" : "images/hands_img/hands_hover_15.jpg",
            "팔찌 이미지16" : "images/hands_img/hands_hover_16.jpg",
            "팔찌 이미지17" : "images/hands_img/hands_hover_17.jpg"
       }


            const Ring_contents = {
            "반지 이미지1" : "images/ring_img/ring_hover_1.jpg",
            "반지 이미지2" : "images/ring_img/ring_hover_2.jpg",
            "반지 이미지3" : "images/ring_img/ring_hover_3.jpg",
            "반지 이미지4" : "images/ring_img/ring_hover_4.jpg",
            "반지 이미지5" : "images/ring_img/ring_hover_5.jpg",
            "반지 이미지6" : "images/ring_img/ring_hover_6.jpg",
            "반지 이미지7" : "images/ring_img/ring_hover_7.jpg",
            "반지 이미지8" : "images/ring_img/ring_hover_8.jpg",
            "반지 이미지9" : "images/ring_img/ring_hover_9.jpg",   
       }


       const Watch_contents_M = {
        "시계_남성 이미지1" : "images/watch_m/watch_m_hover_1.jpg",
        "시계_남성 이미지2" : "images/watch_m/watch_m_hover_2.jpg",
        "시계_남성 이미지3" : "images/watch_m/watch_m_hover_3.jpg",
        "시계_남성 이미지4" : "images/watch_m/watch_m_hover_4.jpg",
        "시계_남성 이미지5" : "images/watch_m/watch_m_hover_5.jpg",
        "시계_남성 이미지6" : "images/watch_m/watch_m_hover_6.jpg",
        "시계_남성 이미지7" : "images/watch_m/watch_m_hover_7.jpg",
        "시계_남성 이미지8" : "images/watch_m/watch_m_hover_8.jpg",
        "시계_남성 이미지9" : "images/watch_m/watch_m_hover_9.jpg",
        "시계_남성 이미지10" : "images/watch_m/watch_m_hover_10.jpg",
        "시계_남성 이미지11" : "images/watch_m/watch_m_hover_11.jpg",
        "시계_남성 이미지12" : "images/watch_m/watch_m_hover_12.jpg",
        "시계_남성 이미지13" : "images/watch_m/watch_m_hover_13.jpg",
        "시계_남성 이미지14" : "images/watch_m/watch_m_hover_14.jpg",
        "시계_남성 이미지15" : "images/watch_m/watch_m_hover_15.jpg",
        "시계_남성 이미지16" : "images/watch_m/watch_m_hover_16.jpg",
        "시계_남성 이미지17" : "images/watch_m/watch_m_hover_17.jpg",
        "시계_남성 이미지18" : "images/watch_m/watch_m_hover_18.jpg",
        "시계_남성 이미지19" : "images/watch_m/watch_m_hover_19.jpg",
        "시계_남성 이미지20" : "images/watch_m/watch_m_hover_20.jpg",
        "시계_남성 이미지21" : "images/watch_m/watch_m_hover_21.jpg",
       }



       const Watch_contents_W = {
        "시계_여성 이미지1" : "images/watch_w/watch_w_hover_1.jpg",
        "시계_여성 이미지2" : "images/watch_w/watch_w_hover_2.jpg",
        "시계_여성 이미지3" : "images/watch_w/watch_w_hover_3.jpg",
        "시계_여성 이미지4" : "images/watch_w/watch_w_hover_4.jpg",
        "시계_여성 이미지5" : "images/watch_w/watch_w_hover_5.jpg",
        "시계_여성 이미지6" : "images/watch_w/watch_w_hover_6.jpg",
        "시계_여성 이미지7" : "images/watch_w/watch_w_hover_7.jpg",
        "시계_여성 이미지8" : "images/watch_w/watch_w_hover_8.jpg",
        "시계_여성 이미지9" : "images/watch_w/watch_w_hover_9.jpg",
        "시계_여성 이미지10" : "images/watch_w/watch_w_hover_10.jpg",
        "시계_여성 이미지11" : "images/watch_w/watch_w_hover_11.jpg",
        "시계_여성 이미지12" : "images/watch_w/watch_w_hover_12.jpg",
        "시계_여성 이미지13" : "images/watch_w/watch_w_hover_13.jpg",
        "시계_여성 이미지14" : "images/watch_w/watch_w_hover_14.jpg",
        "시계_여성 이미지15" : "images/watch_w/watch_w_hover_15.jpg",
        "시계_여성 이미지16" : "images/watch_w/watch_w_hover_16.jpg",
        "시계_여성 이미지17" : "images/watch_w/watch_w_hover_17.jpg",
        "시계_여성 이미지18" : "images/watch_w/watch_w_hover_18.jpg",
        "시계_여성 이미지19" : "images/watch_w/watch_w_hover_19.jpg",
        "시계_여성 이미지20" : "images/watch_w/watch_w_hover_20.jpg",
       }

       const hover_map = {
            ...Necklace_contents,
            ...Bracelet_contents,
            ...Ring_contents,
            ...Watch_contents_M,
            ...Watch_contents_W
       }

        /* 사진 영역에서 움직일 마우스 범위 지정 */
       const text_info = document.querySelector(".text_info");

       const moving_text = txt =>{
        
        const move_x = txt.clientX + 10;
        const move_y = txt.clientY + 10;
         /*  text_info.style.transform = `translate(${move_x}px, ${move_y}px)`; // 브라우저 기준 좌표 /* 요소가 원래 있던 자리에서 상대적으로 잡히는것 */ 
          text_info.style.left = `${move_x}px`;
          text_info.style.top = `${move_y}px`;
       }
       
       const hover_image = document.querySelectorAll('.accessory img');

       const hovering_image = image=>{
        const key = image.alt;
        const current_img = image.src;
        const hover_img = hover_map[key];

      
        image.addEventListener("mouseenter",()=>{
            image.src = hover_img;
            text_info.textContent = key;
            text_info.style.opacity = "1";
            image.addEventListener("mousemove", moving_text);
        });
        image.addEventListener("mouseleave",()=>{
            image.src = current_img;
            text_info.style.opacity = "0";
        })
       }
       /* 함수 호출*/
       hover_image.forEach(j=>{
        hovering_image(j);
       });

    /* 이미지마다 데이터 설정 넣기 */
        const originary_img = document.querySelectorAll(".subMenu_link img");
        originary_img.forEach(img=>{
        const img_src = img.getAttribute("src");
        img.dataset.original_img = img_src;
       });

       /* 오리지널 이미지 큐브 js로 연결 => 큐브에 마우스를 대면 해당 이미지가 보이게 설정하기 위해서 */
       originary_img.forEach(img=>{
         img.addEventListener("click",()=>{
         const image_thumnail = img.dataset.original_img ;
         const img_alt = img.alt; /* title로 뜨게 하기 위해서 */
         console.log("저장할 이미지" , image_thumnail);
         localStorage.setItem("image_thumnail" , image_thumnail);
         localStorage.setItem("img_alt" , img_alt);
         window.location.href = "index2.html";
       });
       });
      

 
   

        /*best 부분의 이미지 흩뿌려지는 효과*/
        const best_p = [
            {"목걸이 이미지1" : "images/nek_img/nek_1.jpg"},
            {"목걸이 이미지2" : "images/nek_img/nek_2.jpg"},
            {"목걸이 이미지3" : "images/nek_img/nek_3.jpg"},
            {"목걸이 이미지1" : "images/nek_img/nek_1.jpg"},
            {"반지 이미지5" : "images/ring_img/ring_5.jpg"},
            {"반지 이미지6" : "images/ring_img/ring_6.jpg"},
            {"반지 이미지7" : "images/ring_img/ring_7.jpg"},
            {"팔찌 이미지2" : "images/hands_img/hands_4.jpg"},
            {"팔찌 이미지3" : "images/hands_img/hands_7.jpg"},
            {"시계_남성 이미지3" : "images/watch_m/watch_m_3.jpg"},
            {"시계_남성 이미지7" : "images/watch_m/watch_m_7.jpg"},
            {"시계_남성 이미지11" : "images/watch_m/watch_m_11.jpg"},
            {"시계_남성 이미지13" : "images/watch_m/watch_m_13.jpg"},
            {"시계_여성 이미지14" : "images/watch_w/watch_w_14.jpg"},
            {"시계_여성 이미지15" : "images/watch_w/watch_w_15.jpg"},
            {"시계_여성 이미지16" : "images/watch_w/watch_w_16.jpg"},
            {"시계_여성 이미지17" : "images/watch_w/watch_w_17.jpg"},
            {"시계_여성 이미지18" : "images/watch_w/watch_w_18.jpg"},
            {"시계_여성 이미지19" : "images/watch_w/watch_w_19.jpg"},
            {"시계_여성 이미지20" : "images/watch_w/watch_w_20.jpg"}

        ]

       const $frame_img = document.querySelector("#frame_best");
       let drag = false; 
       let start_x = 0;
       let img_count = 0;
       const max_img = Infinity;

       function add_img(){
        if(img_count >= max_img) return;

        const $img_data = best_p[img_count % best_p.length]; //0~20의 범위를 넘지 않게
        const [title, src] = Object.entries($img_data)[0]; /* entries => 객체의 모든 키와 값을 배열로 만들어줌 => ["목걸이 이미지1","images/nek_img/nek_1.jpg"}] */
        
        const $img_create = document.createElement("img"); /* img 요소 생성 */
        $img_create.src = src;
        $img_create.alt = title;
        $img_create.title = title;

        /* 랜덤 위치 계산 */
        const container_w = $frame_img.offsetWidth - 180; 
        const container_h = $frame_img.offsetHeight - 180; 
        const x = Math.random() * container_w;
        const y = Math.random() * container_h;
    
        
        //스타일 지정
        $img_create.style.position = "absolute";
        $img_create.style.left = `${x}px`;
        $img_create.style.top = `${y}px`;
        $img_create.style.transform = `rotate(${Math.random() * 90 - 40}deg)scale(0.85)`;
        $img_create.style.opacity = "0";
        $img_create.style.transition = "opacity 0.3s";
   

        //이미지 삽입
        $frame_img.appendChild($img_create); //사진 요소가 $frame_img 안에 들어가게. 자식 요소가 되게

        /* hovering_image($img_create); */

        // 렌더링 타이밍에 맞춰서 애니메이션이 되게
        requestAnimationFrame(()=>{
            $img_create.style.opacity = "1";
        });
        img_count ++;

       }

       /* 다중 이벤트 처리하게 => 마우스/터치다 적용 되게 */

       const start_dragging = (d)=>{
        drag = true; //드래그 진행중
        if(d.type === "touchstart"){
            start_x = d.touches[0].clientX;
        }else{
            start_x = d.clientX;
        }
       };

       const moving_dragging = (d)=>{
        if(!drag) return;
        if(d.type === "touchmove"){
            const move_x = d.touches[0].clientX - start_x;

             if(move_x > 30){
            add_img();
            start_x = d.touches[0].clientX;
        }
        }else{
            const move_x = d.clientX - start_x;
             if(move_x > 30){
            add_img();
            start_x = d.clientX;
        }
        }

       };

       const end_event=()=>{
        drag = false;
       }

       $frame_img.addEventListener("mousedown",start_dragging);
       $frame_img.addEventListener("mousemove",moving_dragging);
       $frame_img.addEventListener("mouseup",end_event);

       $frame_img.addEventListener("touchstart",start_dragging);
       $frame_img.addEventListener("touchmove",moving_dragging);
       $frame_img.addEventListener("touchend",end_event);



       /* best에 있는 사진도 클릭하면, 큐브에 있는 이미지로 연결되게 설정 */

        $frame_img.addEventListener("click",(j)=>{

           const click_img = j.target;

           if(click_img.tagName.toLowerCase() !== "img") return;
           const alt = click_img.alt;
           console.log("클릭한 이미지 alt:", alt);
           const src = click_img.src;          

           const hover_img = hover_map[alt];

           if(!hover_img) return;
            base_img_name = hover_img.split("/").pop().split(".")[0]; // watch_w_hover_20
            img_category = hover_img.split("/")[1]; // watch_w

            const cube_images = [];
            for (let i = 1; i <= 6; i++) {
                cube_images.push(`images/${img_category}/${base_img_name}.jpg`);
            }

            localStorage.setItem("cube_images", JSON.stringify(cube_images));
            localStorage.setItem("image_thumnail", click_img.src);
            localStorage.setItem("img_alt", click_img.alt);


            window.location.href = "index2.html";
            

        });
      




       /* 각 썸네일을 클릭하면 해당 정육면체 페이지로 이동 */
      const $work_img = document.querySelectorAll(".accessory img");
      $work_img.forEach(img=>{
        img.addEventListener("click", (e)=>{
            e.preventDefault();
            const img_alt = img.alt;
            const image_thumnail = img.dataset.original_img || img.getAttribute("src"); /* or */

            /* 따라다니는 사진은 제품 사진 생성 */
            const img_src = img.getAttribute("src"); // ex) images/watch_w/watch_w_hover_20.jpg
            const img_category = img_src.split("/")[1]; // ex) watch_w
            const img_name = img_src.split("/").pop().split(".")[0]; // ex) watch_w_hover_20
            
            /* 6개 면을 위해 이미지 배열 생성 */
            const cube_images = [];
            for (let i = 1; i <=6; i++){
                cube_images.push(`images/${img_category}/${img_name}.jpg`);
            }

            localStorage.setItem("cube_images", JSON.stringify(cube_images));
            localStorage.setItem("image_thumnail" , image_thumnail);
            localStorage.setItem("img_alt" , img_alt);
             });
      });

   



        }); //js end
   