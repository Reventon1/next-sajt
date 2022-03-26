import Menu from "../components/menu";


export default function Index() {
  return (
    <div className="site">
      <div className="site_wrapper">
        <div className="site_menu">
          <Menu></Menu>
        </div>
        <div className="site_content">
          <div className="candy_slider">
            <div className="candy_text">Trick Or Treat</div>
            <div className="first_row">
              <div className="toffe">
                <div className="toffe_img"></div>
                <div className="toffe_text"><p>Toffe</p> [something] <p>$9.99</p></div>
              </div>
              <div className="toffe">
                <div className="bone_img"></div>
                <div className="toffe_text"><p>Bone</p> [something] <p>$9.99</p></div>
              </div>
              <div className="toffe">
                <div className="scary_img"></div>
                <div className="toffe_text"><p>Bone</p> [something] <p>$9.99</p></div>
              </div>
            </div>
            <div className="first_row">
            <div className="toffe">
                <div className="toffe_img2"></div>
                <div className="toffe_text"><p>Candy Cane</p> [something] <p>$9.99</p></div>
              </div>
              <div className="toffe">
                <div className="bone_img2"></div>
                <div className="toffe_text"><p>Pumpkin</p> [something] <p>$9.99</p></div>
              </div>
              <div className="toffe">
                <div className="scary_img2"></div>
                <div className="toffe_text"><p>Ghost</p> [something] <p>$9.99</p></div>
              </div>
            </div>
            
          </div>
          <div className="discount">
              <div className="discount_img"></div>
              <div className="discount_text"><p>50% Discount</p><p>On New Product</p>
                <div className="discount_button">Know more</div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
}






{/* <div className="site">
      <div className="site_wrapper">
        <div className="site_menu">
          <Menu></Menu>
          <div className="logo_and_name">
          <div className="logo"></div>
          <div className="site_name">Halloween</div>
          </div>
          <div className="menu_buttons">
            <div className="home">Home</div>
            <div className="about">About</div>
            <div className="candy">Candy</div>
            <div className="new">New</div>
            <div className="support">Support</div>
          </div>
        </div>
        <div className="site_content">
          <div className="content_slider">
          <div className="content_slider_image">
            <div className="imagtikva"></div>
          </div>
          <div className="content_slider_text">
            <div className="scary_ghost_2020">#1 TOP 1 SCARIEST GHOST 2020</div>
            <div className="content_slider_text_text">UOOOO TRICK OR TREAT!!</div>
            <div className="about_ghost">Hi, I'm Reiza, people call me "El Labu". I'm currently trying to learn something new, building my own bike with parts made only in Malaysia.</div>
            <div className="slider_buttons">
              <div className="red_button">Book Now</div>
              <div className="record">Track Record ➜</div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div> */}