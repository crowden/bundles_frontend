import {jUtility} from './utility';

export default class CrudAddDelete
{
    init(specs){
        const self = this;

        specs.items.forEach(function(element){
            let trigger_add = document.getElementById(element.add_trigger_id);
            let list = document.getElementById(element.fields_list_id);

            // Event Listener: ADD
            jUtility.addEvent(trigger_add, 'click', function(e){
                jUtility.stopDefault(e);
                self.manageAddClicks(list, specs.form_control_type);
            });

            // Event Listener: DELETE
            jUtility.addEvent(list, 'click', function(e){
                jUtility.stopDefault(e);
                self.manageDeleteClicks(e);
            });
        });
    }

    /*------------ COLLECTION: add ------------*/

    manageAddClicks(list, form_control_type){
        let proto = list.getAttribute('data-prototype');
        let proto_index = null;
        
        let list_length = list.children.length; // number of <li>
        let last_child = (list_length === 0) ? null : list.children[list_length - 1]; // last <li>


        if (null !== last_child){
            // this really just needs to be any form control, even if there are many present.
            // The will all have the same numerical, unique id.
            let form_field = last_child.getElementsByTagName(form_control_type)[0];
            let id_number = form_field.getAttribute('id').match(/(\d+)/); // numeric part of id
            proto_index = Number(id_number[1]) + 1; // the first capture result
        } else {
            proto_index = 0;
        }

        let new_proto = proto.replace(/__name__/g, proto_index);
        list.insertAdjacentHTML('beforeend', new_proto);
    }

    /*------------ COLLECTION: delete ------------*/

    manageDeleteClicks(e){
        let current = e.target || e.srcElement;

        while (current.parentNode){
            if (current.classList.contains('js-collection-item-delete')){
                let list_item = current.parentNode; // current <li>
                
                while (list_item.firstChild){
                    list_item.removeChild(list_item.firstChild);
                }

                list_item.parentNode.removeChild(list_item);

                return true;
            }

            current = current.parentNode;
        }
    }
}