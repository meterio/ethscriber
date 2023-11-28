import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const walletConnectProjectId = '176492253f1830f33ad81110be200648';

const meter = {
  id: 82,
  name: "Meter",
  network: "meter",
  nativeCurrency: {
    decimals: 18,
    name: "Meter Stable",
    symbol: "MTR",
  },
  rpcUrls: {
    default: { http: ["https://rpc.meter.io"] },
    public: { http: ["https://rpc.meter.io"] },
  },
  blockExplorers: {
    etherscan: { name: "MeterScan", url: "https://scan.meter.io" },
    default: { name: "MeterScan", url: "https://scan.meter.io" },
  },
  contracts: {},
};

const meterTestnet = {
  id: 83,
  name: "Meter Testnet",
  network: "meterTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Meter Stable",
    symbol: "MTR",
  },
  rpcUrls: {
    default: { http: ["https://rpctest.meter.io"] },
    public: { http: ["https://rpctest.meter.io"] },
  },
  blockExplorers: {
    etherscan: {
      name: "MeterScan",
      url: "https://scan-warringstakes.meter.io",
    },
    default: { name: "MeterScan", url: "https://scan-warringstakes.meter.io" },
  },
  contracts: {},
  testnet: true,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, meter, meterTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Text Ethscripter',
  chains,
  projectId: walletConnectProjectId,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
