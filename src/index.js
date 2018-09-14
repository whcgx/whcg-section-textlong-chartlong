import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@whcg/whcg-general-styles/grid.js';

export class WhcgSectionTextlongChartlong extends PolymerElement {
  static get template() {
    return html`
    <style include = "style-element-grid">
      
        .section {
            padding-top: 130px;
        }

        .headline {
            padding-top: 32px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-xl);
            color: var(--parmaco-base-color-100pct);  
        }

        .content-text{
            padding-top: 33px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-s);
            font-weight: var(--parmaco-font-weight-normal);
            color: var(--parmaco-base-color-100pct);
        }

        .content-chart {
            padding-top: 33px;
        }

    </style>



    <div class="col1span12 grid-12 section">
        <div class="col2span2 headline"><slot name="title"></div>
        <div class="col4span8 content-text">
            <slot name="text"></slot>
        </div>
        <div class="col4span8 content-chart">
            <slot name="chart"></slot>
        </div>
    </div>
  `;
  }
}

window.customElements.define('whcg-section-textlong-chartlong', WhcgSectionTextlongChartlong);
