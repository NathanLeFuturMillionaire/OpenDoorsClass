import { PaymentProvider } from "@/services/payment/types";
import { env } from "@/config/env";

export class ChariowProvider implements PaymentProvider {
  private apiKey = env.CHARIOW_API_KEY;

  async createPayment(params) {
    // Appel à l'API Chariow — à implémenter à l'étape suivante
    throw new Error("Not implemented yet");
  }

  async verifyPayment(reference) {
    throw new Error("Not implemented yet");
  }

  async handleWebhook(payload, signature) {
    // Vérification de la signature avec CHARIOW_WEBHOOK_SECRET avant tout traitement
    throw new Error("Not implemented yet");
  }
}