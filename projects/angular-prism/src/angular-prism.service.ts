import { Inject, Injectable } from '@angular/core'
import { PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

import 'prismjs'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-scss'

declare var Prism: any

@Injectable({
	providedIn: 'root'
})

export class AngularPrism {
	constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
	highlightAll() {
		if (isPlatformBrowser(this.platformId)) {
			Prism.highlightAll()
			Prism.plugins.NormalizeWhitespace.setDefaults({
				'remove-trailing': true,
				'remove-indent': true,
				'left-trim': true,
				'right-trim': true,
				'break-lines': 80,
				'indent': 0,
				'remove-initial-line-feed': true,
				'spaces-to-tabs': 4
			})
		}
	}


}
export class createCodeBlock {
	constructor(language: string, code: string) {
		return `
		<pre>
			<code class="language-${language}">
				${code}
			</code>
		</pre>`
	}
}