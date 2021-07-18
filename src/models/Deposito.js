const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  });

const DepositoSchema = new mongoose.Schema({   
    sigla_dep: { type: String, uppercase:true, required: true, unique: true },
    sigla_loja_mae: { type: String, uppercase:true, required: true },
    perfil: { type: String, uppercase:true, required: true },
    gerente: {
        nome_completo: {type: String, uppercase:true, required: true },
        nome_guerra: {type: String, uppercase:true, required: true },
        num_geral: {type: String, uppercase:true, required: true },
        foto_url: {type: String},
    },
    chefe_dep: {
        nome_completo: {type: String, uppercase:true, required: true },
        nome_guerra: {type: String, uppercase:true, required: true },
        num_geral: {type: String, uppercase:true, required: true },
        data_admissao: {type: Date, required: true},
        data_nascimento: {type: Date, required: true},
        historico_empresa: {type: String, uppercase:true, required: true },
        foto_url: {type: String},
        contatos: {
            corporativo: {type: String, default: '' },
            proprio: {type: String, default: '' },
            proprio2: {type: String, default: '' },
        }
    },
    funcionario_num2: {
        nome_completo: {type: String, uppercase:true},
        nome_guerra: {type: String, uppercase:true },
        num_geral: {type: String, uppercase:true},
        data_admissao: {type: Date }, 
        data_nascimento: {type: Date},
        historico_empresa: {type: String, uppercase:true },
        foto_url: {type: String},        
        contatos: {
            corporativo: {type: String},
            proprio: {type: String},
            proprio2: {type: String},
        }
    },
    qtd_funcionarios: {type: Number},
    organograma: {
        url_organograma: {type: String},
        status_organograma: {type: String},
        ultima_atualizacao : { type : Date, default: Date.now }
    },
    sistemas: {
           venda_remota: { type: Boolean, required: true},
           control_mobile: { type: Boolean, required: true},
           wms: { type: Boolean, required: true},
        },
    pdvs: {
        sigla_posto: [String],
        sigla_rep: [String]
    },
    fecha_almoco: { type: Boolean, required: true},
    cliente_retira: { type: Boolean, required: true},
    anexo_loja: { type: Boolean, required: true},
    infraestrutura: {
        fotos_deposito: {
            interno: [String],
            externo: [String]
        },
        area_servico: {
            crp: { type: Boolean, required: true},
            logistica_reversa: { type: Boolean, required: true},
            tat: { type: Boolean, required: true},
        },
        metodos_seguranca: {
            cftv: { type: Boolean, required: true},
            vigilante: { type: Boolean, required: true},
            seg_canina: { type: Boolean, required: true},
            cerca_eletrica: { type: Boolean, required: true},
            botao_panico: { type: Boolean, required: true},
            alarme: { type: Boolean, required: true},
        },
        equipamentos: {
            porta_pallet: { type: Boolean, required: true},
            pallet: { type: Boolean, required: true},
            rack_movimentacao: { type: Boolean, required: true},
            carrinho_plataforma: { type: Boolean, required: true},
            balanca_digital: { type: Boolean, required: true},
            balanca: { type: Boolean, required: true},
            esteira_flexivel: { type: Boolean, required: true},
            empilhadeira_gas: { type: Boolean, required: true},
            empilhadeira_eletrica: { type: Boolean, required: true},
            transpaleteira_manual: { type: Boolean, required: true},
            transpaleteira_eletrica: { type: Boolean, required: true},
            escada_plataforma: { type: Boolean, required: true},
            carrinho_armazenagem: { type: Boolean, required: true},
            caixa_azul: { type: Boolean, required: true},
            movimentador_vidro: { type: Boolean, required: true},
            armazenador_vidro: { type: Boolean, required: true},
            gaiola_portateis: { type: Boolean, required: true},
        }
    },
    dados_geograficos: {
        cidade: {type: String, uppercase:true, required: true },
        uf: {type: String, uppercase:true, required: true },
        loc_exata: { type: Boolean, required: true},
        location: { 
            type: PointSchema,
            index: '2dsphere'
          },
    }
}, {timestamps: true});

module.exports = mongoose.model('Depositos', DepositoSchema);