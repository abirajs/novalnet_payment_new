import { Static, Type } from '@sinclair/typebox';
console.log('payment-componets.dto.ts');
const DropinType = Type.Enum({
  EMBEDDED: 'embedded',
  HPP: 'hpp',
});

export const SupportedPaymentDropinsData = Type.Object({
  type: DropinType,
});

export const SupportedPaymentComponentsData = Type.Object({
  type: Type.String(),
  subtypes: Type.Optional(Type.Array(Type.String())),
});

/**
 * Supported payment components schema.
 *
 * Example:
 * {
 *   "dropins": [
 *     {
 *       "type": "embedded"
 *     }
 *   ],
 *   "components": [
 *     {
 *       "type": "card"
 *     },
 *     {
 *       "type": "applepay"
 *     }
 *   ]
 * }
 */
export const SupportedPaymentComponentsSchema = Type.Object({
  dropins: Type.Array(SupportedPaymentDropinsData),
  components: Type.Array(SupportedPaymentComponentsData),
});

export type SupportedPaymentComponentsSchemaDTO = Static<typeof SupportedPaymentComponentsSchema>;
