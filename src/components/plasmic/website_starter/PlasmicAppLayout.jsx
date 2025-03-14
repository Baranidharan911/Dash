// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bkp27JqRmBswsckuZzB2bS
// Component: bqTYCQhIX3z3
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header from "../../Header"; // plasmic-import: CkjDbynZySqX/component
import { Sidebar } from "../../../../components/Sidebar"; // plasmic-import: WSDWdc551VOM/codeComponent
import { useScreenVariants as useScreenVariantsf2BxFpzIBjxi } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: f2BxFpzIBjxi/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bkp27JqRmBswsckuZzB2bS/projectcss
import sty from "./PlasmicAppLayout.module.css"; // plasmic-import: bqTYCQhIX3z3/css

createPlasmicElementProxy;

export const PlasmicAppLayout__VariantProps = new Array();

export const PlasmicAppLayout__ArgProps = new Array("children");

const $$ = {};

function PlasmicAppLayout__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsf2BxFpzIBjxi()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <Header
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames("__wab_instance", sty.header)}
      />

      <div className={classNames(projectcss.all, sty.freeBox__rHzTh)}>
        <Sidebar
          data-plasmic-name={"sidebar"}
          data-plasmic-override={overrides.sidebar}
          className={classNames("__wab_instance", sty.sidebar)}
          collapsedWidth={80}
          defaultCollapsed={true}
          dynamicWidth={true}
          expandedWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? 150 : 230
          }
          height={"auto"}
          menuItems={[
            {
              key: "/live-dashboard",
              icon: "MailOutlined",
              label: "Main Navigation",
              children: [
                { key: "/live-dashboard", label: "Live Dashboard" },
                { key: "/sales-dashboard", label: "Sales Dashboard" },
                { key: "/crm", label: "CRM" },
                { key: "/crm2", label: "CRM2" }
              ]
            },
            {
              key: "/reports",
              icon: "AppstoreOutlined",
              label: "Reports",
              children: [
                { key: "/secondary-sales", label: "Secondary Sales" },
                { key: "/outstanding", label: "Outstanding" },
                { key: "/payment", label: "Payment" }
              ]
            },
            {
              key: "/operations",
              icon: "SettingOutlined",
              label: "Operations",
              children: [
                { key: "/working-module", label: "Working Module" },
                { key: "/stock", label: "Stock" }
              ]
            }
          ]}
          mode={"inline"}
          siderBackground={"#001529"}
          textColor={"#ffffff"}
          theme={"dark"}
        />

        <div className={classNames(projectcss.all, sty.freeBox__hB8Yr)}>
          {renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "sidebar"],
  header: ["header"],
  sidebar: ["sidebar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAppLayout__ArgProps,
          internalVariantPropNames: PlasmicAppLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppLayout";
  } else {
    func.displayName = `PlasmicAppLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicAppLayout = Object.assign(
  // Top-level PlasmicAppLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    sidebar: makeNodeComponent("sidebar"),
    // Metadata about props expected for PlasmicAppLayout
    internalVariantProps: PlasmicAppLayout__VariantProps,
    internalArgProps: PlasmicAppLayout__ArgProps
  }
);

export default PlasmicAppLayout;
/* prettier-ignore-end */
