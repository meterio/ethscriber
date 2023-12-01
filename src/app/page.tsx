import CenteredContainer from '../components/CenteredContainer';
import { ConnectButton } from '../components/ConnectButton';
import { Ethscribe } from '../components/Ethscribe';
import { GithubButton } from '../components/GithubButton';
import { Logo } from '../components/Logo';
import Preloader from '../components/preloader/Preloader';

function Home() {
  return (
    <>
      <Preloader />
      <div
        style={{
          position: 'fixed',
          top: 10,
          left: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Logo />
        <div style={{ marginLeft: 10 }} />
        <GithubButton />
      </div>
      <div style={{ position: 'fixed', top: 10, right: 10 }}>
        <ConnectButton />
      </div>
      <CenteredContainer>
        <a href="https://passport.meter.io">Bridge any tokens to receive MTR airdrop</a>
        <h2 style={{ fontFamily: '"Roboto", sans-serif' }}>Ethscriber</h2>
        <div
          style={{
            fontFamily: '"Roboto", sans-serif',
            marginBottom: 25,
            textAlign: 'center',
          }}
        >
          A simple tool to inscribe text{' '}
          <a href="https://ethscriptions.com/">ethscriptions</a> by{' '}
          <a href="https://twitter.com/zac_denham">zacque.eth</a>.
        </div>
        <Ethscribe />
      </CenteredContainer>
    </>
  );
}

export default Home;
