import '../scss/boldgrid-ai.scss';

class BoldGridAi {
	constructor() {
		this.init();
	}

	init() {
		this._bindEvents();
	}

	_bindEvents() {
		document.addEventListener('DOMContentLoaded', () => {
			var select = document.getElementById( 'ai-prompt-type-select' );
			if ( select ) {
				this._maybeShowReviewType( select.value );
				this._bindChangeType();
			}
		} );
	}

	_bindChangeType() {
		const select = document.getElementById( 'ai-prompt-type-select' );
		if ( select ) {
			select.addEventListener( 'change', ( event ) => {
				const type = event.target.value;
				this._maybeShowReviewType( type );
			} );
		}
	}

	_maybeShowReviewType( type ) {
		const reviewType = document.getElementById( 'ai-prompt-review-type' );
		console.log( {
			reviewType,
			type
		} );
		if ( 'review' === type ) {
			reviewType.classList.remove( 'hidden' );
		} else {
			reviewType.classList.add( 'hidden' );
		}
	}
}

window.BoldGridAi = new BoldGridAi();

export default BoldGridAi;
