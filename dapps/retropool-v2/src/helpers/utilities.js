export async function isSmartContract(address, provider) {
  try {
    const code = await provider.getCode(address);
    return code !== "0x";
  } catch (error) {
    console.error(error);
    return false;
  }
}
