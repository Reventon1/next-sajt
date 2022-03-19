import Menu from "../components/menu";

export default function Category() {
  return (
    <div className="site">
      <div className="site_wrapper">
        <div className="site_menu">
          <Menu></Menu>
        </div>
        <div className="site_content">
          <div className="content_category">
            Категории
          </div>
        </div>
      </div>
    </div>
  );
}
