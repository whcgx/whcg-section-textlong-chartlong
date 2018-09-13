'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');
require('@whcg/whcg-general-styles/grid.js');

class WhcgSectionTextlongChartlong extends polymerElement_js.PolymerElement {
  static get template() {
    return polymerElement_js.html`
    <style include = "style-element-grid">
      
        .categoryinputsection {
            padding-top: 130px;
        }

        .categoryinputsection-headline {
            padding-top: 32px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-xl);
            color: var(--parmaco-base-color-100pct);
            
        }
        .categoryinputsection-content {
        }

        .categoryinputsection-content--withchartbottom {
            grid-template-rows: auto 350px;
        }

        .categoryinputsection-content--withcharttop {
            grid-template-rows: 350px auto;
        }

        .categoryinputsection-content-text{
            padding-top: 33px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-s);
            font-weight: var(--parmaco-font-weight-normal);
            color: var(--parmaco-base-color-100pct);
        }

        .categoryinputsection-content-text--top{
            padding-top: 33px;
            font-family: var(--parmaco-font-family);
            font-size: var(--parmaco-font-size-s);
            font-weight: var(--parmaco-font-weight-normal);
            color: var(--parmaco-base-color-100pct);
        }

        .categoryinputsection-content-inputbox {
        }

        .categoryinputsection-content-inputboxrow--bottom {
            padding-top: 33px;
        }

        .categoryinputsection-content-chart {
            padding-top: 33px;
        }

        .categoryinputsection-content-chart--bottom {
            padding-top: 33px;
        }

        .categoryinputsection-content-chart--top {
            padding-top: 33px;
        }

        .gridcontent-right {
            justify-self: end;
        }



    </style>



    <div class="col1span12 grid-12 categoryinputsection">
        <div class="col2span2 categoryinputsection-headline"><slot name="title"></div>
        <div class="col4span8 categoryinputsection-content-text--top">
            <slot name="text"></slot>
        </div>
        <div class="col4span8 categoryinputsection-content-chart--bottom">
            <slot name="chart"></slot>
        </div>
    </div>
  `;
  }
}

window.customElements.define('whcg-section-textlong-chartlong', WhcgSectionTextlongChartlong);

exports.WhcgSectionTextlongChartlong = WhcgSectionTextlongChartlong;