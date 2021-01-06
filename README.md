# Send custom variable to Meercode Build

This action send a custom url to Meercode Build

## Inputs

### `meercode-token`

**Required** Value of your Meercode token. https://meercode.io/settings.

### `url`

**Required** Custom URL. ex: deployment url


## Example usage

```
uses: meercodeio/meercode-custom-variable@0.1.0
with:
  meercode-token: '${{ secrets.MEERCODE_TOKEN }}'
  url: 'https://my-qa-env.herokuapp.com'
```