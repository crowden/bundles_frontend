import React from 'react';
import ReactDOM from 'react-dom';
import {
    CrudIndexSorter,
    jUtility,
    MdPopupHelper,
    ToggleHiddenContainer } from 'j29-library';

/*------------ Init if flag === true ------------*/
if ((typeof(j29_toggle_hidden_containers) !== 'undefined') 
    && (j29_toggle_hidden_containers === true)) 
    ToggleHiddenContainer.toggle('.js-wrapper-show-hide');

if ((typeof(j29_sort_crud_index) !== 'undefined') 
    && (j29_sort_crud_index === true)) 
    ReactDOM.render(<CrudIndexSorter title='sort by' id='sorting' />, document.getElementById('js-sorting'));

if ((typeof(j29_render_md_helper) !== 'undefined') 
    && (j29_render_md_helper === true)) 
    ReactDOM.render(<MdPopupHelper />, document.getElementById('js-md-help-popovers'));