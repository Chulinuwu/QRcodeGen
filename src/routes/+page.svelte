<script>
    import { generateQRCode } from '$lib/qrcode';

    let qrCodeUrl = '';

    async function generate() {
        if(qrCodeUrl){
            console.log("generated")
        qrCodeUrl = (await generateQRCode(qrCodeUrl)) || '';
        }
    }
</script>

<main>
    <h1>QR Code Generator</h1>
    <input type="text" bind:value={qrCodeUrl} placeholder="Enter text" />
    <button on:click={generate}>Generate QR Code</button>
    {#if qrCodeUrl}
        <img src={qrCodeUrl} alt="QR Code" />
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
    input {
        margin-bottom: 1rem;
        padding: 0.5rem;
        font-size: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    }
    img {
        margin-top: 1rem;
        max-width: 100%;
    }
</style>