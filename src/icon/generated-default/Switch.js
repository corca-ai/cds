import * as React from 'react';
const SvgSwitch = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#363738"
      fillRule="evenodd"
      d="M13.324 3.5h.8520000000000001c.258 0 .494 0 .692.016.213.018.446.057.676.175.33.168.598.435.765.765.118.23.157.463.175.676.016.198.016.434.016.692v.852c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.676 1.75 1.75 0 0 1-.765.765c-.23.118-.463.157-.676.175C14.67 9 14.434 9 14.176 9h-.852c-.258 0-.494 0-.692-.016a1.8 1.8 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.175-.676C11 7.17 11 6.934 11 6.676v-.8520000000000001c0-.258 0-.494.016-.692.018-.213.057-.446.175-.676a1.75 1.75 0 0 1 .765-.765c.23-.118.463-.157.676-.175.198-.016.434-.016.692-.016m-.693 1.53h.001zm.002-.001a.6.6 0 0 1 .121-.018c.13-.01.304-.011.596-.011h.8c.292 0 .467 0 .596.011a.6.6 0 0 1 .12.018.25.25 0 0 1 .105.104.6.6 0 0 1 .018.121c.01.13.011.304.011.596v.8c0 .292 0 .467-.011.596a.6.6 0 0 1-.018.12.25.25 0 0 1-.104.105.6.6 0 0 1-.121.018c-.13.01-.304.011-.596.011h-.8c-.292 0-.467 0-.596-.011a.6.6 0 0 1-.12-.018.25.25 0 0 1-.105-.104.6.6 0 0 1-.018-.121 8 8 0 0 1-.011-.596v-.8c0-.292 0-.467.011-.596a.6.6 0 0 1 .018-.12.25.25 0 0 1 .104-.105m-.103.102v.001zm0 2.238v-.001zm.1.101h.002zm2.24 0h-.002zm.1-.1v-.002zm0-2.24v.002zm-.102-.1h.001zM6.676 16.5h-.8520000000000001c-.258 0-.494 0-.692-.016a1.8 1.8 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.175-.676 9 9 0 0 1-.016-.692v-.852c0-.258 0-.494.016-.692.018-.213.057-.446.175-.676a1.75 1.75 0 0 1 .765-.765c.23-.118.463-.158.676-.175C5.33 11 5.566 11 5.824 11h.852c.258 0 .494 0 .692.016.213.018.446.057.676.175.33.167.597.435.765.765.118.23.157.463.175.676.016.198.016.434.016.692v.8520000000000001c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.676 1.75 1.75 0 0 1-.765.765c-.23.118-.463.157-.676.175-.198.016-.434.016-.692.016m.693-1.53h-.001zm-.002.001a.6.6 0 0 1-.121.018c-.13.01-.304.011-.596.011h-.8c-.292 0-.467 0-.596-.011a.6.6 0 0 1-.12-.018.25.25 0 0 1-.105-.104.6.6 0 0 1-.018-.121A8 8 0 0 1 5 14.15v-.8c0-.292 0-.467.011-.596a.6.6 0 0 1 .018-.12.25.25 0 0 1 .104-.105.6.6 0 0 1 .121-.018c.13-.01.304-.011.596-.011h.8c.292 0 .467 0 .596.011a.6.6 0 0 1 .12.018.25.25 0 0 1 .105.104.6.6 0 0 1 .018.121c.01.13.011.304.011.596v.8c0 .292 0 .467-.011.596a.6.6 0 0 1-.018.12.25.25 0 0 1-.104.105m.103-.102v-.001zm0-2.238v.001zm-.1-.101h-.002zm-2.24 0h.002zm-.1.1v.002zm0 2.24v-.002zm.102.1h-.001z"
      clipRule="evenodd"
    />
    <path
      fill="#363738"
      d="M6.97 4.53a.75.75 0 1 1 1.06-1.06l1.995 1.994A.74.74 0 0 1 10.25 6v.007a.75.75 0 0 1-.22.523l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72h-.24c-.572 0-.957 0-1.253.025-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514C5 8.243 5 8.627 5 9.2v.3a.75.75 0 1 1-1.5 0v-.33c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.002 5.55c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03h.27zM13.803 13.225c-.296.024-.68.025-1.253.025h-.24l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 .005 1.066l1.995 1.994a.75.75 0 1 0 1.06-1.06l-.72-.72h.27c.535 0 .98 0 1.345-.03.38-.03.736-.098 1.073-.27A2.75 2.75 0 0 0 16.2 13.25c.172-.338.24-.694.27-1.074.03-.365.03-.81.03-1.345v-.33a.75.75 0 0 0-1.5 0v.3c0 .572 0 .957-.025 1.252-.023.288-.065.425-.111.516a1.25 1.25 0 0 1-.546.546c-.091.046-.228.088-.515.111"
    />
  </svg>
);
export default SvgSwitch;
