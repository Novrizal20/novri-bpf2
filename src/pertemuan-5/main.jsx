import { createRoot } from "react-dom/client";
import "./tailwind.css"
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import responsiveDesign from "./ResponsiveDesign";
createRoot(document.getElementById("root")).render(
    <div>
        {/* <FrameworkList/> */}
        <FrameworkListSearchFilter/>
        <responsiveDesign/>
    </div>
);