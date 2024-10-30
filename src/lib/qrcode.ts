import QRCode from 'qrcode';

export async function generateQRCode(text: string | QRCode.QRCodeSegment[]) {
    try {
        const url = await QRCode.toDataURL(text);
        return url;
    } catch (err) {
        console.error(err);
    }
}