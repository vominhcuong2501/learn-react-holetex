import React, { useContext } from "react";
import { AppContext } from "./Context";

export default function Content() {
  const { isOpen, themeStyle } = useContext(AppContext);

  return (
    <div
      className="content"
      style={{
        ...themeStyle,
        padding: "10px",
        gridColumn: isOpen ? "2 / 2" : "1 / 2",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
        magni laudantium accusamus? Explicabo consequuntur nobis fuga, quae eum
        omnis consequatur dolore deleniti. Illum perferendis odit dolore saepe
        similique praesentium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
        magni laudantium accusamus? Explicabo consequuntur nobis fuga, quae eum
        omnis consequatur dolore deleniti. Illum perferendis odit dolore saepe
        similique praesentium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
        magni laudantium accusamus? Explicabo consequuntur nobis fuga, quae eum
        omnis consequatur dolore deleniti. Illum perferendis odit dolore saepe
        similique praesentium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
        magni laudantium accusamus? Explicabo consequuntur nobis fuga, quae eum
        omnis consequatur dolore deleniti. Illum perferendis odit dolore saepe
        similique praesentium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
        magni laudantium accusamus? Explicabo consequuntur nobis fuga, quae eum
        omnis consequatur dolore deleniti. Illum perferendis odit dolore saepe
        similique praesentium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore
        magni laudantium accusamus? Explicabo consequuntur nobis fuga, quae eum
        omnis consequatur dolore deleniti. Illum perferendis odit dolore saepe
        similique praesentium?
      </p>
    </div>
  );
}
