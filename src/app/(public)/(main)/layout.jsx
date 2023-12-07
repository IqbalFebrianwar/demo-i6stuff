import dynamic from "next/dynamic";

const NavbarComponent = dynamic(() => import("@/app/components/navbar"), {
  ssr: false,
});
const FooterComponent = dynamic(() => import("@/app/components/footer"), {
  ssr: false,
});
const DrawerComponent = dynamic(() => import("@/app/components/drawer"));
const SideNavComponent = dynamic(()=> import("@/app/components/sidenav"))

const homepageLayout = ({ children }) => {
  return (
    <html data-theme="light">
      <DrawerComponent>
        <div className="drawer-content">
          <NavbarComponent />
          {children}
          <FooterComponent />
        </div>
        <SideNavComponent />
      </DrawerComponent>
    </html>
  );
};
export default homepageLayout;
