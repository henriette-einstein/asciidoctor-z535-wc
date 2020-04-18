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
    span += '></x-signalpanel>'
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

This time some fancey signalpanels:

== Simple usage
|===
| Code | Result

a| 
---- 
signalpanel:danger[]
----
| signalpanel:danger[]


a| 
---- 
signalpanel:warning[]
----

| signalpanel:warning[]

a| 
---- 
signalpanel:caution[]
----

| signalpanel:caution[]

a| 
---- 
signalpanel:notice[]
----
| signalpanel:notice[]

a| 
---- 
signalpanel:safety[]
----
| signalpanel:safety[]

a| 
---- 
signalpanel:thisisnotcorrect[]
----
| signalpanel:thisisnotcorrect[]

|===



== Signalpanel with borders
|===
| Code | Result

a| 
---- 
signalpanel:danger-border[]
----
| signalpanel:danger-border[]


a| 
---- 
signalpanel:warning-border[]
----
| signalpanel:warning-border[]

a| 
---- 
signalpanel:caution-border[]
----
| signalpanel:caution-border[]

a| 
---- 
signalpanel:notice-border[]
----
| signalpanel:notice-border[]

a| 
---- 
signalpanel:safety-border[]
----
| signalpanel:safety-border[]

a| 
---- 
signalpanel:thisisnotcorrect-border[]
----
| signalpanel:thisisnotcorrect-border[]

|===



== Signalpanel with color options
|===
| Code | Result color=bw | Result color=wb

a| 
---- 
signalpanel:danger[color=bw] signalpanel:danger[color=wb]
----
| signalpanel:danger[color=bw] | signalpanel:danger[color=wb]

a| 
---- 
signalpanel:warning[color=bw] signalpanel:warning[color=wb]
----
| signalpanel:warning[color=bw] | signalpanel:warning[color=wb]

a| 
---- 
signalpanel:caution[color=bw] signalpanel:caution[color=wb]
----
| signalpanel:caution[color=bw] | signalpanel:caution[color=wb]

a| 
---- 
signalpanel:notice[color=bw] signalpanel:notice[color=wb]
----
| signalpanel:notice[color=bw] | signalpanel:notice[color=wb]


a| 
---- 
signalpanel:safety[color=bw] signalpanel:safety[color=wb]
----
| signalpanel:safety[color=bw] | signalpanel:safety[color=wb]

|===

== Signalpanel with language option de
|===
| Code | Result

a| 
---- 
signalpanel:danger[lang=de]
----
| signalpanel:danger[lang=de]


a| 
---- 
signalpanel:warning[lang=de]
----
| signalpanel:warning[lang=de]

a| 
---- 
signalpanel:caution[lang=de]
----
| signalpanel:caution[lang=de]

a| 
---- 
signalpanel:notice[lang=de]
----
| signalpanel:notice[lang=de]

a| 
---- 
signalpanel:safety[lang=de]
----
| signalpanel:safety[lang=de]


|===


== Signalpanel with language option fr
|===
| Code | Result

a| 
---- 
signalpanel:danger[lang=fr]
----
| signalpanel:danger[lang=fr]


a| 
---- 
signalpanel:warning[lang=fr]
----
| signalpanel:warning[lang=fr]

a| 
---- 
signalpanel:caution[lang=fr]
----
| signalpanel:caution[lang=fr]

a| 
---- 
signalpanel:notice[lang=fr]
----
| signalpanel:notice[lang=fr]

a| 
---- 
signalpanel:safety[lang=fr]
----
| signalpanel:safety[lang=fr]

|===

== Signalpanel with language option es
|===
| Code | Result

a| 
---- 
signalpanel:danger[lang=es]
----
| signalpanel:danger[lang=es]


a| 
---- 
signalpanel:warning[lang=es]
----
| signalpanel:warning[lang=es]

a| 
---- 
signalpanel:caution[lang=es]
----
| signalpanel:caution[lang=es]

a| 
---- 
signalpanel:notice[lang=es]
----
| signalpanel:notice[lang=es]

a| 
---- 
signalpanel:safety[lang=es]
----
| signalpanel:safety[lang=es]

|===


== Multiple Signalpanels in one line
signalpanel:danger[] signalpanel:warning[] signalpanel:caution[] signalpanel:notice[] signalpanel:safety[]

`, { standalone: true, extension_registry: registry, to_file: 'index2.html' })