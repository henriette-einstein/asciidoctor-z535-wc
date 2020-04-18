const asciidoctor = require('@asciidoctor/core')()

const registry = asciidoctor.Extensions.create()

registry.inlineMacro(function () {
  var self = this
  self.named('signalpanel')
  self.process(function (parent, target, opts) {
    let span = `<x-signalpanel target="${target}"`
    if (opts && opts.lang) {
      span += ` lang="${opts.lang}"`
    }
    if (opts && opts.style) {
      span += ` style="${opts.style}"`
    }
    return self.createBlock(parent, 'pass', span).convert()
  })
})
registry.docinfoProcessor(function () {
  const self = this
  self.process((doc) => {
    if (doc.getBackend() !== 'html5') {
      return ''
    }
    return `<script type="module" src="./signalpanel.js"></script>`
  })
})

asciidoctor.convert(`= Asciidoctor x Web Components

Danger: signalpanel:danger[]

Warning: signalpanel:warning[]

Caution: signalpanel:caution[]

Notice: signalpanel:notice[]

Safety Instruction: signalpanel:safety[]

`, { standalone: true, extension_registry: registry, to_file: 'index.html' })