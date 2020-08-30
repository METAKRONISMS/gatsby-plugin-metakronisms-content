export const base = {
  pageContext: {
    assets: [],
    episodeNr: 0,
    title: 'Demo',
    seasonNr: 0,
    pageType: 'episode',
  },
  data: {
    episodeMdx: {
      nodes: [
        {
          parent: {
            __typename: 'File',
            name: 'background',
          },
          frontmatter: {
            title: 'Background',
            choices: [
              {
                target: 'choices',
                title: 'Choices',
              },
            ],
          },
          body: 'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Background",\n  "choices": [{\n    "target": "choices",\n    "title": "Choices"\n  }]\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", {\n    "id": "metakronisms-gatsby-plugin",\n    "style": {\n      "position": "relative"\n    }\n  }, mdx("a", _extends({\n    parentName: "h1"\n  }, {\n    "href": "#metakronisms-gatsby-plugin",\n    "aria-label": "metakronisms gatsby plugin permalink",\n    "className": "anchor before"\n  }), mdx("svg", _extends({\n    parentName: "a"\n  }, {\n    "aria-hidden": "true",\n    "focusable": "false",\n    "height": "16",\n    "version": "1.1",\n    "viewBox": "0 0 16 16",\n    "width": "16"\n  }), mdx("path", _extends({\n    parentName: "svg"\n  }, {\n    "fillRule": "evenodd",\n    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"\n  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", mdx("br", {\n    parentName: "p"\n  }), "\\n", "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."), mdx("p", null, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));\n}\n;\nMDXContent.isMDXComponent = true;',
        },
        {
          parent: {
            __typename: 'File',
            name: 'choices',
          },
          frontmatter: {
            title: 'Choices',
            choices: [
              {
                target: 'choice',
                title: 'Choices',
              },
            ],
          },
          body: 'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Choices",\n  "choices": [{\n    "target": "choice",\n    "title": "Choices"\n  }]\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", {\n    "id": "metakronisms-gatsby-plugin",\n    "style": {\n      "position": "relative"\n    }\n  }, mdx("a", _extends({\n    parentName: "h1"\n  }, {\n    "href": "#metakronisms-gatsby-plugin",\n    "aria-label": "metakronisms gatsby plugin permalink",\n    "className": "anchor before"\n  }), mdx("svg", _extends({\n    parentName: "a"\n  }, {\n    "aria-hidden": "true",\n    "focusable": "false",\n    "height": "16",\n    "version": "1.1",\n    "viewBox": "0 0 16 16",\n    "width": "16"\n  }), mdx("path", _extends({\n    parentName: "svg"\n  }, {\n    "fillRule": "evenodd",\n    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"\n  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", mdx("br", {\n    parentName: "p"\n  }), "\\n", "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."), mdx("p", null, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));\n}\n;\nMDXContent.isMDXComponent = true;',
        },
        {
          parent: {
            __typename: 'File',
            name: 'intro',
          },
          frontmatter: {
            title: 'Demo',
            choices: [
              {
                target: 'slides',
                title: 'Slides components',
              },
            ],
          },
          body: 'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Demo",\n  "choices": [{\n    "target": "slides",\n    "title": "Slides components"\n  }]\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", {\n    "id": "metakronisms-gatsby-plugin",\n    "style": {\n      "position": "relative"\n    }\n  }, mdx("a", _extends({\n    parentName: "h1"\n  }, {\n    "href": "#metakronisms-gatsby-plugin",\n    "aria-label": "metakronisms gatsby plugin permalink",\n    "className": "anchor before"\n  }), mdx("svg", _extends({\n    parentName: "a"\n  }, {\n    "aria-hidden": "true",\n    "focusable": "false",\n    "height": "16",\n    "version": "1.1",\n    "viewBox": "0 0 16 16",\n    "width": "16"\n  }), mdx("path", _extends({\n    parentName: "svg"\n  }, {\n    "fillRule": "evenodd",\n    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"\n  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Redaction of content is base on the ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"\n  }), "Markdown syntax"), "."), mdx("p", null, "Lorem ipsum ", mdx("em", {\n    parentName: "p"\n  }, "dolor"), " sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ", mdx("strong", {\n    parentName: "p"\n  }, "labore"), " et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata ~sanctus~ est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", mdx("br", {\n    parentName: "p"\n  }), "\\n", "At vero eos et accusam et justo duo ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://dolores.ispum"\n  }), "dolores"), " et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("blockquote", null, mdx("p", {\n    parentName: "blockquote"\n  }, "Yo!")), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."), mdx("hr", null), mdx("p", null, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("p", null, mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "http://www.youtube.com/watch?v=n8wd2k8iUJ8"\n  }), mdx("img", _extends({\n    parentName: "a"\n  }, {\n    "src": "http://img.youtube.com/vi/n8wd2k8iUJ8/0.jpg",\n    "alt": "IMAGE ALT TEXT HERE"\n  })))));\n}\n;\nMDXContent.isMDXComponent = true;',
        },
        {
          parent: {
            __typename: 'File',
            name: 'slides',
          },
          frontmatter: {
            title: 'Slides',
            choices: [
              {
                target: 'background',
                title: 'Background',
              },
            ],
          },
          body: 'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Slides",\n  "choices": [{\n    "target": "background",\n    "title": "Background"\n  }]\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h1", {\n    "id": "metakronisms-gatsby-plugin",\n    "style": {\n      "position": "relative"\n    }\n  }, mdx("a", _extends({\n    parentName: "h1"\n  }, {\n    "href": "#metakronisms-gatsby-plugin",\n    "aria-label": "metakronisms gatsby plugin permalink",\n    "className": "anchor before"\n  }), mdx("svg", _extends({\n    parentName: "a"\n  }, {\n    "aria-hidden": "true",\n    "focusable": "false",\n    "height": "16",\n    "version": "1.1",\n    "viewBox": "0 0 16 16",\n    "width": "16"\n  }), mdx("path", _extends({\n    parentName: "svg"\n  }, {\n    "fillRule": "evenodd",\n    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"\n  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.", mdx("br", {\n    parentName: "p"\n  }), "\\n", "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."), mdx("p", null, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));\n}\n;\nMDXContent.isMDXComponent = true;',
        },
      ],
    },
  },
};

export const episodeSteps = {
  intro: {
    title: 'Intro',
    body: 'Intro body',
    choices: [
      {
        target: 's1',
        title: 'Step 1',
      },
      {
        target: 's2',
        title: 'Step 2',
      },
      {
        target: 's3',
        title: 'Step 3',
      },
    ],
  },
  s1: {
    title: 'Step 1',
    body: 'Step 1 body',
    choices: [
      {
        target: 's2',
        title: 'Step 2',
      },
      {
        target: 's3',
        title: 'Step 3',
      },
      {
        target: 's4',
        title: 'Step 4',
      },
      // {
      //   target: 'end',
      //   title: 'End',
      // },
    ],
  },
  s2: {
    title: 'Step 2',
    body: 'Step 2 body',
    choices: [
      {
        target: 's3',
        title: 'Step 3',
      },
      {
        target: 's4',
        title: 'Step 4',
      },
      {
        target: 's5',
        title: 'Step 5',
      },
    ],
  },
  s3: {
    title: 'Step 3',
    body: 'Step 3 body',
    choices: [
      {
        target: 's4',
        title: 'Step 4',
      },
      {
        target: 's5',
        title: 'Step 5',
      },
    ],
  },
  s4: {
    title: 'Step 4',
    body: 'Step 4 body',
    choices: [
      {
        target: 'end',
        title: 'End',
      },
    ],
  },
  s5: {
    title: 'Step 5',
    body: 'Step 5 body',
    choices: [
      {
        target: 's6',
        title: 'Step 6',
      },
    ],
  },
  s6: {
    title: 'Step 6',
    body: 'Step 6 body',
    choices: [
      {
        target: 's7',
        title: 'Step 7',
      },
    ],
  },
  s7: {
    title: 'Step 7',
    body: 'Step 7 body',
    choices: [
      {
        target: 's8',
        title: 'Step 8',
      },
      {
        target: 'end',
        title: 'End',
      },
    ],
  },
  s8: {
    title: 'Step 8',
    body: 'Step 8 body',
    choices: [
      {
        target: 'end',
        title: 'End',
      },
    ],
  },
  end: {
    title: 'End',
    body: 'End body',
  },
};

const steps = ['s1', 's3', 's4'];

export default {
  steps,
  episodeSteps,
  getStepInfo: (wanted = 'intro') => episodeSteps[wanted],
};
