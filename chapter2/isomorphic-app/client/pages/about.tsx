import { Pane, Heading, Paragraph } from 'evergreen-ui';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Shop - About Us</title>
      </Head>
      <Pane>
        <Heading size={700} paddingY={12}>
          About Us
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          rhoncus elit. Phasellus in leo molestie, mollis augue sed, ornare
          lorem. Nam suscipit id metus in tristique. Mauris d/apibus lorem in
          molestie egestas. Aliquam efficitur lacinia s/apien vitae facilisis.
          Sed eu elit lorem. Pellentesque tortor urna, tristique ac sem eu,
          volutpat mattis lectus. In varius lectus eget nibh fermentum placerat.
          Vivamus at ligula sodales enim ultrices cursus. Nulla risus mi,
          sodales sed velit eleifend, convallis consequat orci. Mauris rutrum
          faucibus est a vehicula. Proin sed quam sit amet lectus commodo
          scelerisque eu quis est. Cras quis mi ut ligula auctor tempor.
        </Paragraph>
      </Pane>
    </>
  );
}
