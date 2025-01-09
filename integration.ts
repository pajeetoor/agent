interface AIIntegrationSeva {
  // Pranali Prabandhan
  pranaliArambh(
    vinyas: {
      agents: string[];
      samvida: PranaliSamvida;
      prarambhikAvastha?: Record<string, any>;
    }
  ): Promise<ArambhikParinam>;

  // Namuna Prabandhan
  namunaSangrah(
    namuna: string,
    sandarbh: Record<string, any>,
    vishwasniyata: number
  ): Promise<void>;

  milteJulteNamuneKhojein(
    samagri: string,
    seema?: number
  ): Promise<Array<{ namuna: string; vishwasniyata: number }>>;

  // Nirdharan Prabandhan
  nirnayDarlekh(
    agentId: string,
    nirnay: string,
    sandarbh: Record<string, any>
  ): Promise<void>;

  milteJulteNirnayKhojein(
    samagri: string,
    seema?: number
  ): Promise<Array<{ nirnay: string; sandarbh: Record<string, any> }>>;
}

// Pranali Samvida Varnan
interface PranaliSamvida {
  naam: string;
  sanskaran: string;
  niyam: string[];
}
