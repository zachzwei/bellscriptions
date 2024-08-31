const targetBlockHeight = 188000; // Set your target block height

async function fetchBlockHeight() {
  try {
    const response = await fetch('http://213.199.44.225:3000/blockheight');
    const data = await response.json();
    const currentBlockHeight = data.blockHeight;
    const blocksRemaining = targetBlockHeight - currentBlockHeight;

    if (blocksRemaining <= 0) {
      document.getElementById('countdown').innerText = "The target block height has been reached!";
    } else {
      const estimatedTimeRemaining = blocksRemaining * 60; // Assuming average block time is 60 seconds
      const minutes = Math.floor(estimatedTimeRemaining / 60);
      const seconds = estimatedTimeRemaining % 60;
      document.getElementById('countdown').innerText = Time remaining: ${minutes}m ${seconds}s (${blocksRemaining} blocks left);
    }
  } catch (error) {
    console.error('Error fetching block height:', error);
    document.getElementById('countdown').innerText = 'Error loading block height.';
  }
}

fetchBlockHeight();
setInterval(fetchBlockHeight, 60000); // Update every minute