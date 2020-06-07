import { state } from "cerebral/tags";
import { toggle } from "cerebral/operators";

export let handleMessagesOpen = [toggle(state`Messages.open`)];

export let offline = [
	handleMessagesOpen,
  offline_action  
];

export function offline_action({props, state}) {
	console.log("--> offline demo");
}
