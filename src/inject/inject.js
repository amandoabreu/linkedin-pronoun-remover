chrome.runtime.sendMessage({}, function(response) {
	function removePs(){
		var bs = document.getElementsByClassName('update-components-actor__supplementary-actor-info');
	    for (let b of bs){
			if(!b.classList.contains('pronouns-removed')){
				console.log(b.innerHTML);
				b.innerHTML = b.innerHTML.replace(/ *\([^)]*\) */g, "");
				b.classList.add('pronouns-removed');
			}
		}
		var commentbs = document.getElementsByClassName('mr1');
		for (let c of commentbs){
			if(!c.classList.contains('pronouns-removed')){
				console.log(c.innerHTML);
				c.innerHTML = c.innerHTML.replace(/ *\([^)]*\) */g, "");
				c.classList.add('pronouns-removed');
			}
		}
	}
	const targetNode = document.body;

	// Options for the observer (which mutations to observe)
	// Set attributes to false if you do not care if existing nodes have changed,
	//  otherwise set it true. 
	const config = { attributes: false, childList: true, subtree: true };

	// Callback function to execute when mutations are observed
	const callback = function(mutationsList, observer) {
		removePs();
	};

	// Create an observer instance linked to the callback function
	const observer = new MutationObserver(callback);

	// Start observing the target node for configured mutations
	observer.observe(targetNode, config);

	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			removePs();
			// ----------------------------------------------------------

		}
	}, 10);
});
