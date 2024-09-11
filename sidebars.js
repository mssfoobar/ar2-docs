/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// const ucsRoomMgmtApiVer = require("./docs/openapi/ucs/versions.json");
// const {
//     versionSelector,
//     versionCrumb,
// } = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

const sidebars = {
    overview: [
        {
            type: "autogenerated",
            dirName: "10_overview",
        },
    ],
    development: [
        {
            type: "autogenerated",
            dirName: "20_development",
        },
    ],
    deployment: [
        {
            type: "autogenerated",
            dirName: "30_deployment",
        },
    ],
    web: [
        {
            type: "autogenerated",
            dirName: "40_modules/20_web",
        },
    ],
    iam: [
        {
            type: "autogenerated",
            dirName: "40_modules/10_iam",
        },
    ],
    ucs: [
        {
            type: "autogenerated",
            dirName: "40_modules/30_ucs",
        },
    ],
    gis: [
        {
            type: "autogenerated",
            dirName: "40_modules/40_gis",
        },
    ],
    rnr: [
        {
            type: "autogenerated",
            dirName: "40_modules/50_rnr",
        },
    ],
    wfe: [
        {
            type: "autogenerated",
            dirName: "40_modules/60_wfe",
        },
    ],
    ims: [
        {
            type: "autogenerated",
            dirName: "40_modules/70_ims",
        },
    ],
    unh: [
        {
            type: "autogenerated",
            dirName: "40_modules/80_unh",
        },
    ],
    tag: [
        {
            type: "autogenerated",
            dirName: "40_modules/90_tag",
        },
    ],
    dash: [
        {
            type: "autogenerated",
            dirName: "40_modules/91_dash",
        },
    ],
    iams: [
        {
            type: "autogenerated",
            dirName: "40_modules/92_iams",
        },
    ],
    ian: [
        {
            type: "autogenerated",
            dirName: "40_modules/93_ian",
        }
    ],
    documentation: [
        {
            type: "autogenerated",
            dirName: "99_documentation",
        },
    ],
};

module.exports = sidebars;
