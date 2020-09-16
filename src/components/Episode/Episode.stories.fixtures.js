const pre = `function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }`;

const magic = `
var layoutProps = {
  _frontmatter: _frontmatter
};
var MDXLayout = "wrapper";
return function MDXContent(_ref) {
  console.info('MDXContent', _ref);
  var components = _ref.components,
      props = _objectWithoutProperties(_ref, ["components"]);
        return mdx(MDXLayout, _extends({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }),`;

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
            showChoices: true,
            choices: [
              {
                target: 'choices',
                title: 'Choices',
              },
            ],
          },
          body: `${pre}
/* @jsx mdx */
var _frontmatter = {
  "title": "Background",
  "choices": [{
    "target": "choices",
    "title": "Choices"
  }],
  "showChoices": true
};
${magic} mdx("h1", {
    "id": "metakronisms-gatsby-plugin",
    "style": {
      "position": "relative"
    }
  }, mdx("a", _extends({
    parentName: "h1"
  }, {
    "href": "#metakronisms-gatsby-plugin",
    "aria-label": "metakronisms gatsby plugin permalink",
    "className": "anchor before"
  }), mdx("svg", _extends({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), mdx("path", _extends({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, voluptua.", mdx("br", {
    parentName: "p"
  }), "\\n", "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("p", null, "Lorem amet."));
}
;
MDXContent.isMDXComponent = true;`,
        },
        {
          parent: {
            __typename: 'File',
            name: 'choices',
          },
          frontmatter: {
            title: 'Choices',
            showChoices: true,
            choices: [],
          },
          body: `${pre}
/* @jsx mdx */
var _frontmatter = {
  "title": "Choices",
  "choices": [],
  "showChoices": true
};
${magic} mdx("h1", {
    "id": "metakronisms-gatsby-plugin",
    "style": {
      "position": "relative"
    }
  }, mdx("a", _extends({
    parentName: "h1"
  }, {
    "href": "#metakronisms-gatsby-plugin",
    "aria-label": "metakronisms gatsby plugin permalink",
    "className": "anchor before"
  }), mdx("svg", _extends({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), mdx("path", _extends({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Lorem voluptua.", mdx("br", {
    parentName: "p"
  }), "\\n", "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("p", null, "At vero eos et accusam et justo duo dolores et ea rebum."), mdx("p", null, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "));
}
;
MDXContent.isMDXComponent = true;`,
        },
        {
          parent: {
            __typename: 'File',
            name: 'episode',
          },
          frontmatter: {
            title: 'Episode description',
            showChoices: true,
            choices: [
              {
                target: 'slides',
                title: 'Slides components',
              },
            ],
          },
          body: `${pre}
/* @jsx mdx */
var _frontmatter = {
  "title": "Episode description",
  "choices": [{
    "target": "slides",
    "title": "Slides components"
  }],
  "showChoices": true
};
${magic} mdx("h1", {
    "id": "episode-redaction",
    "style": {
      "position": "relative"
    }
  }, mdx("a", _extends({
    parentName: "h1"
  }, {
    "href": "#episode-redaction",
    "aria-label": "episode redaction permalink",
    "className": "anchor before"
  }), mdx("svg", _extends({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), mdx("path", _extends({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Episode redaction"), mdx("h2", {
    "id": "intro",
    "style": {
      "position": "relative"
    }
  }, mdx("a", _extends({
    parentName: "h2"
  }, {
    "href": "#intro",
    "aria-label": "intro permalink",
    "className": "anchor before"
  }), mdx("svg", _extends({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), mdx("path", _extends({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "Intro"), mdx("p", null, "You need to create a file called ", mdx("inlineCode", {
    parentName: "p"
  }, "intro.mdx"), " with at least 1 choice in its\\nfrontmatter part.", mdx("br", {
    parentName: "p"
  }), "\\n", "The ", mdx("inlineCode", {
    parentName: "p"
  }, "title"), " in the frontmatter will be the title of the episode."));
}
;
MDXContent.isMDXComponent = true;`,
        },
        {
          parent: {
            __typename: 'File',
            name: 'intro',
          },
          frontmatter: {
            title: 'Demo',
            showChoices: true,
            choices: [
              {
                target: 'episode',
                title: 'Episode description',
              },
              {
                target: 'slides',
                title: 'Slides components',
              },
            ],
          },
          body: `${pre}
/* @jsx mdx */
var _frontmatter = {
  "title": "Demo",
  "choices": [{
    "target": "episode",
    "title": "Episode description"
  }, {
    "target": "slides",
    "title": "Slides components"
  }],
  "showChoices": true
};
${magic} mdx("h1", {
    "id": "metakronisms-gatsby-plugin",
    "style": {
      "position": "relative"
    }
  }, mdx("a", _extends({
    parentName: "h1"
  }, {
    "href": "#metakronisms-gatsby-plugin",
    "aria-label": "metakronisms gatsby plugin permalink",
    "className": "anchor before"
  }), mdx("svg", _extends({
    parentName: "a"
  }, {
    "aria-hidden": "true",
    "focusable": "false",
    "height": "16",
    "version": "1.1",
    "viewBox": "0 0 16 16",
    "width": "16"
  }), mdx("path", _extends({
    parentName: "svg"
  }, {
    "fillRule": "evenodd",
    "d": "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  })))), "METAKRONISMS Gatsby plugin"), mdx("p", null, "Redaction of content is base on the ", mdx("a", _extends({
    parentName: "p"
  }, {
    "href": "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
  }), "Markdown syntax"), "."), mdx("p", null, "Lorem ipsum ", mdx("em", {
    parentName: "p"
  }, "dolor"), " sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ", mdx("strong", {
    parentName: "p"
  }, "labore"), " takimata est Lorem ipsum dolor sit amet. diam voluptua.", mdx("br", {
    parentName: "p"
  }), "\\n", "At vero eos et accusam et justo duo ", mdx("a", _extends({
    parentName: "p"
  }, {
    "href": "https://dolores.ispum"
  }), "dolores"), " et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."), mdx("blockquote", null, mdx("p", {
    parentName: "blockquote"
  }, "Yo!")), mdx("p", null, "At vero eos et accusam et justo duo dolores et ea rebum."), mdx("hr", null), mdx("p", null, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "), mdx("p", null, mdx("a", _extends({
    parentName: "p"
  }, {
    "href": "http://www.youtube.com/watch?v=n8wd2k8iUJ8"
  }), mdx("img", _extends({
    parentName: "a"
  }, {
    "src": "http://img.youtube.com/vi/n8wd2k8iUJ8/0.jpg",
    "alt": "IMAGE ALT TEXT HERE"
  })))));
}
;
MDXContent.isMDXComponent = true;`,
        },
        {
          parent: {
            __typename: 'File',
            name: 'slides',
          },
          frontmatter: {
            title: 'Slides',
            showChoices: false,
            choices: [
              {
                target: 'background',
                title: 'Background',
              },
            ],
          },
          body: `${pre}
/* @jsx mdx */
var _frontmatter = {
  "title": "Slides",
  "choices": [{
    "target": "background",
    "title": "Background"
  }]
};
${magic} mdx(Slides, {
    mdxType: "Slides"
  }, mdx(Slide, {
    key: "a",
    mdxType: "Slide"
  }, mdx("p", null, "Each slide ", mdx("strong", {
    parentName: "p"
  }, "must"), " have a unique ", mdx("inlineCode", {
    parentName: "p"
  }, "key"), " property.")), mdx(Slide, {
    key: "b",
    mdxType: "Slide"
  }, mdx("p", null, "The code of the previous slide was formatted like that"), mdx("pre", null, mdx("code", _extends({
    parentName: "pre"
  }, {}), "  <Slide key=\\"a\\">\\n\\nEach slide **must** have a unique \`key\` property.\\n\\n  </Slide>\\n")), mdx("p", null, "So called \\u201Cwhite spaces\\u201D and line breaks are important in the syntax.")), mdx(Slide, {
    key: "c",
    mdxType: "Slide"
  }, "Yada yada")));
}
;
MDXContent.isMDXComponent = true;`,
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
