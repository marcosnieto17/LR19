angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('guALaRioja.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('guALaRioja.acercaDeLaApp', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('guALaRioja.fuentesDeInformaciN', {
    url: '/page71',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fuentesDeInformaciN.html',
        controller: 'fuentesDeInformaciNCtrl'
      }
    }
  })

  .state('guALaRioja', {
    url: '/side-menu21',
    templateUrl: 'templates/guALaRioja.html',
    controller: 'guALaRiojaCtrl'
  })

  .state('guALaRioja.trMitesYServicios', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMitesYServicios.html',
        controller: 'trMitesYServiciosCtrl'
      }
    }
  })

  .state('guALaRioja.informaciNMunicipal', {
    url: '/page127',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informaciNMunicipal.html',
        controller: 'informaciNMunicipalCtrl'
      }
    }
  })

  .state('guALaRioja.reciclado', {
    url: '/page128',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reciclado.html',
        controller: 'recicladoCtrl'
      }
    }
  })

  .state('guALaRioja.telFonosTiles', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/telFonosTiles.html',
        controller: 'telFonosTilesCtrl'
      }
    }
  })

  .state('guALaRioja.consejosTiles', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consejosTiles.html',
        controller: 'consejosTilesCtrl'
      }
    }
  })

  .state('guALaRioja.feriados', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/feriados.html',
        controller: 'feriadosCtrl'
      }
    }
  })

  .state('guALaRioja.agendaDeEventos', {
    url: '/page93',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agendaDeEventos.html',
        controller: 'agendaDeEventosCtrl'
      }
    }
  })

  .state('guALaRioja.parejaYFamilia', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/parejaYFamilia.html',
        controller: 'parejaYFamiliaCtrl'
      }
    }
  })

  .state('guALaRioja.adultosMayores', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adultosMayores.html',
        controller: 'adultosMayoresCtrl'
      }
    }
  })

  .state('guALaRioja.documentaciNCiudadana', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/documentaciNCiudadana.html',
        controller: 'documentaciNCiudadanaCtrl'
      }
    }
  })

  .state('guALaRioja.consumidores', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consumidores.html',
        controller: 'consumidoresCtrl'
      }
    }
  })

  .state('guALaRioja.personasConDiscapacidad', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/personasConDiscapacidad.html',
        controller: 'personasConDiscapacidadCtrl'
      }
    }
  })

  .state('guALaRioja.violenciaYAbuso', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/violenciaYAbuso.html',
        controller: 'violenciaYAbusoCtrl'
      }
    }
  })

  .state('guALaRioja.trNsitoYAutomotor', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trNsitoYAutomotor.html',
        controller: 'trNsitoYAutomotorCtrl'
      }
    }
  })

  .state('guALaRioja.cuidarLaSalud', {
    url: '/page126',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cuidarLaSalud.html',
        controller: 'cuidarLaSaludCtrl'
      }
    }
  })

  .state('guALaRioja.uniNCivilConvivencial', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uniNCivilConvivencial.html',
        controller: 'uniNCivilConvivencialCtrl'
      }
    }
  })

  .state('guALaRioja.casarse', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/casarse.html',
        controller: 'casarseCtrl'
      }
    }
  })

  .state('guALaRioja.divorciarse', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/divorciarse.html',
        controller: 'divorciarseCtrl'
      }
    }
  })

  .state('guALaRioja.embarazo', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/embarazo.html',
        controller: 'embarazoCtrl'
      }
    }
  })

  .state('guALaRioja.planificTuEmbarazo', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planificTuEmbarazo.html',
        controller: 'planificTuEmbarazoCtrl'
      }
    }
  })

  .state('guALaRioja.reproducciNAsistida', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reproducciNAsistida.html',
        controller: 'reproducciNAsistidaCtrl'
      }
    }
  })

  .state('guALaRioja.nacimientoDeUnBeb', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nacimientoDeUnBeb.html',
        controller: 'nacimientoDeUnBebCtrl'
      }
    }
  })

  .state('guALaRioja.adoptarUnNiO', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adoptarUnNiO.html',
        controller: 'adoptarUnNiOCtrl'
      }
    }
  })

  .state('guALaRioja.decisionesATomar', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/decisionesATomar.html',
        controller: 'decisionesATomarCtrl'
      }
    }
  })

  .state('guALaRioja.documentosATenerEnMano', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/documentosATenerEnMano.html',
        controller: 'documentosATenerEnManoCtrl'
      }
    }
  })

  .state('guALaRioja.pasosASeguir', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasosASeguir.html',
        controller: 'pasosASeguirCtrl'
      }
    }
  })

  .state('guALaRioja.beneficiosQueTeCorresponden', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beneficiosQueTeCorresponden.html',
        controller: 'beneficiosQueTeCorrespondenCtrl'
      }
    }
  })

  .state('guALaRioja.iniciarTrMiteDeJubilaciN', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iniciarTrMiteDeJubilaciN.html',
        controller: 'iniciarTrMiteDeJubilaciNCtrl'
      }
    }
  })

  .state('guALaRioja.sacarUnaPensiN', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sacarUnaPensiN.html',
        controller: 'sacarUnaPensiNCtrl'
      }
    }
  })

  .state('guALaRioja.categorAsEspecialesDeJubilaciN', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorAsEspecialesDeJubilaciN.html',
        controller: 'categorAsEspecialesDeJubilaciNCtrl'
      }
    }
  })

  .state('guALaRioja.jubilarteSinTenerLaTotalidadDeAportes', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jubilarteSinTenerLaTotalidadDeAportes.html',
        controller: 'jubilarteSinTenerLaTotalidadDeAportesCtrl'
      }
    }
  })

  .state('guALaRioja.pensionesEspeciales', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pensionesEspeciales.html',
        controller: 'pensionesEspecialesCtrl'
      }
    }
  })

  .state('guALaRioja.tusCobros', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tusCobros.html',
        controller: 'tusCobrosCtrl'
      }
    }
  })

  .state('guALaRioja.tusBeneficios', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tusBeneficios.html',
        controller: 'tusBeneficiosCtrl'
      }
    }
  })

  .state('guALaRioja.trMitesFrecuentes', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMitesFrecuentes.html',
        controller: 'trMitesFrecuentesCtrl'
      }
    }
  })

  .state('guALaRioja.paraFamiliaresDelTitular', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paraFamiliaresDelTitular.html',
        controller: 'paraFamiliaresDelTitularCtrl'
      }
    }
  })

  .state('guALaRioja.trMitesRelacionados', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMitesRelacionados.html',
        controller: 'trMitesRelacionadosCtrl'
      }
    }
  })

  .state('guALaRioja.consejosSaludables', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consejosSaludables.html',
        controller: 'consejosSaludablesCtrl'
      }
    }
  })

  .state('guALaRioja.serviciosDeSalud', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviciosDeSalud.html',
        controller: 'serviciosDeSaludCtrl'
      }
    }
  })

  .state('guALaRioja.trMites', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMites.html',
        controller: 'trMitesCtrl'
      }
    }
  })

  .state('guALaRioja.sacarElDNI', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sacarElDNI.html',
        controller: 'sacarElDNICtrl'
      }
    }
  })

  .state('guALaRioja.dNIParaExtranjeros', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dNIParaExtranjeros.html',
        controller: 'dNIParaExtranjerosCtrl'
      }
    }
  })

  .state('guALaRioja.dNIEnTuCelular', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dNIEnTuCelular.html',
        controller: 'dNIEnTuCelularCtrl'
      }
    }
  })

  .state('guALaRioja.pasaporteAlInstante', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasaporteAlInstante.html',
        controller: 'pasaporteAlInstanteCtrl'
      }
    }
  })

  .state('guALaRioja.pasaporteExprS', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasaporteExprS.html',
        controller: 'pasaporteExprSCtrl'
      }
    }
  })

  .state('guALaRioja.pasaporteComN', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasaporteComN.html',
        controller: 'pasaporteComNCtrl'
      }
    }
  })

  .state('guALaRioja.leyDeIdentidadDeGNero', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leyDeIdentidadDeGNero.html',
        controller: 'leyDeIdentidadDeGNeroCtrl'
      }
    }
  })

  .state('guALaRioja.actualizTusDocumentos', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/actualizTusDocumentos.html',
        controller: 'actualizTusDocumentosCtrl'
      }
    }
  })

  .state('guALaRioja.denunciUnHechoDeDiscriminaciN', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/denunciUnHechoDeDiscriminaciN.html',
        controller: 'denunciUnHechoDeDiscriminaciNCtrl'
      }
    }
  })

  .state('guALaRioja.tratamientosMDicos', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tratamientosMDicos.html',
        controller: 'tratamientosMDicosCtrl'
      }
    }
  })

  .state('guALaRioja.publicacionesYCursos', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/publicacionesYCursos.html',
        controller: 'publicacionesYCursosCtrl'
      }
    }
  })

  .state('guALaRioja.aspectosLegales', {
    url: '/page67',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aspectosLegales.html',
        controller: 'aspectosLegalesCtrl'
      }
    }
  })

  .state('guALaRioja.QuPuedoExigirComoConsumidor', {
    url: '/page68',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuPuedoExigirComoConsumidor.html',
        controller: 'QuPuedoExigirComoConsumidorCtrl'
      }
    }
  })

  .state('guALaRioja.serviciosTilesParaElConsumidor', {
    url: '/page69',
    views: {
      'side-menu21': {
        templateUrl: 'templates/serviciosTilesParaElConsumidor.html',
        controller: 'serviciosTilesParaElConsumidorCtrl'
      }
    }
  })

  .state('guALaRioja.comprMejor', {
    url: '/page70',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comprMejor.html',
        controller: 'comprMejorCtrl'
      }
    }
  })

  .state('guALaRioja.controlTuFacturaDeServicios', {
    url: '/page72',
    views: {
      'side-menu21': {
        templateUrl: 'templates/controlTuFacturaDeServicios.html',
        controller: 'controlTuFacturaDeServiciosCtrl'
      }
    }
  })

  .state('guALaRioja.consejos', {
    url: '/page73',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consejos.html',
        controller: 'consejosCtrl'
      }
    }
  })

  .state('guALaRioja.antesDeReclamar', {
    url: '/page74',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antesDeReclamar.html',
        controller: 'antesDeReclamarCtrl'
      }
    }
  })

  .state('guALaRioja.presentTuReclamo', {
    url: '/page75',
    views: {
      'side-menu21': {
        templateUrl: 'templates/presentTuReclamo.html',
        controller: 'presentTuReclamoCtrl'
      }
    }
  })

  .state('guALaRioja.certificadoNicoDeDiscapacidad', {
    url: '/page76',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoNicoDeDiscapacidad.html',
        controller: 'certificadoNicoDeDiscapacidadCtrl'
      }
    }
  })

  .state('pensiNNoContributivaPorInvalidez', {
    url: '/page77',
    templateUrl: 'templates/pensiNNoContributivaPorInvalidez.html',
    controller: 'pensiNNoContributivaPorInvalidezCtrl'
  })

  .state('guALaRioja.certificadoMDicoOficialCMO', {
    url: '/page94',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoMDicoOficialCMO.html',
        controller: 'certificadoMDicoOficialCMOCtrl'
      }
    }
  })

  .state('asignaciNParaPersonasTrasplantadas', {
    url: '/page78',
    templateUrl: 'templates/asignaciNParaPersonasTrasplantadas.html',
    controller: 'asignaciNParaPersonasTrasplantadasCtrl'
  })

  .state('programaFederalIncluirSalud', {
    url: '/page79',
    templateUrl: 'templates/programaFederalIncluirSalud.html',
    controller: 'programaFederalIncluirSaludCtrl'
  })

  .state('guALaRioja.compraDeVehCulosParticulares', {
    url: '/page80',
    views: {
      'side-menu21': {
        templateUrl: 'templates/compraDeVehCulosParticulares.html',
        controller: 'compraDeVehCulosParticularesCtrl'
      }
    }
  })

  .state('guALaRioja.compraDeVehCulosParaInstituciones', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/compraDeVehCulosParaInstituciones.html',
        controller: 'compraDeVehCulosParaInstitucionesCtrl'
      }
    }
  })

  .state('guALaRioja.libreDisponibilidadParaPersonas', {
    url: '/page82',
    views: {
      'side-menu21': {
        templateUrl: 'templates/libreDisponibilidadParaPersonas.html',
        controller: 'libreDisponibilidadParaPersonasCtrl'
      }
    }
  })

  .state('guALaRioja.libreDisponibilidadParaInstituciones', {
    url: '/page83',
    views: {
      'side-menu21': {
        templateUrl: 'templates/libreDisponibilidadParaInstituciones.html',
        controller: 'libreDisponibilidadParaInstitucionesCtrl'
      }
    }
  })

  .state('guALaRioja.sMboloInternacionalDeAcceso', {
    url: '/page84',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMboloInternacionalDeAcceso.html',
        controller: 'sMboloInternacionalDeAccesoCtrl'
      }
    }
  })

  .state('guALaRioja.sMboloIdentificatorioDelAutomotor', {
    url: '/page85',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMboloIdentificatorioDelAutomotor.html',
        controller: 'sMboloIdentificatorioDelAutomotorCtrl'
      }
    }
  })

  .state('guALaRioja.sMboloConFranquiciaImpositiva', {
    url: '/page86',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMboloConFranquiciaImpositiva.html',
        controller: 'sMboloConFranquiciaImpositivaCtrl'
      }
    }
  })

  .state('guALaRioja.sMboloParaElExteriorDelPaS', {
    url: '/page87',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMboloParaElExteriorDelPaS.html',
        controller: 'sMboloParaElExteriorDelPaSCtrl'
      }
    }
  })

  .state('guALaRioja.sMboloParaVehCuloInstitucional', {
    url: '/page88',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMboloParaVehCuloInstitucional.html',
        controller: 'sMboloParaVehCuloInstitucionalCtrl'
      }
    }
  })

  .state('guALaRioja.vehCuloInstitucionalConFranquicia', {
    url: '/page89',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vehCuloInstitucionalConFranquicia.html',
        controller: 'vehCuloInstitucionalConFranquiciaCtrl'
      }
    }
  })

  .state('guALaRioja.cuadernilloParaElUsoDelSMbolo', {
    url: '/page90',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cuadernilloParaElUsoDelSMbolo.html',
        controller: 'cuadernilloParaElUsoDelSMboloCtrl'
      }
    }
  })

  .state('guALaRioja.cMoObtenerElSubsidioPorSepelio', {
    url: '/page91',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cMoObtenerElSubsidioPorSepelio.html',
        controller: 'cMoObtenerElSubsidioPorSepelioCtrl'
      }
    }
  })

  .state('guALaRioja.QuEsElAbusoSexualInfantil', {
    url: '/page92',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuEsElAbusoSexualInfantil.html',
        controller: 'QuEsElAbusoSexualInfantilCtrl'
      }
    }
  })

  .state('guALaRioja.situacionesDeViolenciaDeGNero', {
    url: '/page95',
    views: {
      'side-menu21': {
        templateUrl: 'templates/situacionesDeViolenciaDeGNero.html',
        controller: 'situacionesDeViolenciaDeGNeroCtrl'
      }
    }
  })

  .state('guALaRioja.aplicaciNMVil144', {
    url: '/page96',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aplicaciNMVil144.html',
        controller: 'aplicaciNMVil144Ctrl'
      }
    }
  })

  .state('guALaRioja.QuEsLaTrataDePersonas', {
    url: '/page97',
    views: {
      'side-menu21': {
        templateUrl: 'templates/QuEsLaTrataDePersonas.html',
        controller: 'QuEsLaTrataDePersonasCtrl'
      }
    }
  })

  .state('guALaRioja.ofertaDeTrabajoEngaOsa', {
    url: '/page98',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ofertaDeTrabajoEngaOsa.html',
        controller: 'ofertaDeTrabajoEngaOsaCtrl'
      }
    }
  })

  .state('guALaRioja.CuNdoHayExplotaciN', {
    url: '/page101',
    views: {
      'side-menu21': {
        templateUrl: 'templates/CuNdoHayExplotaciN.html',
        controller: 'CuNdoHayExplotaciNCtrl'
      }
    }
  })

  .state('guALaRioja.anteCasosDePersonasExtraviadas', {
    url: '/page99',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anteCasosDePersonasExtraviadas.html',
        controller: 'anteCasosDePersonasExtraviadasCtrl'
      }
    }
  })

  .state('guALaRioja.sacarLaLicenciaDeConducir', {
    url: '/page100',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sacarLaLicenciaDeConducir.html',
        controller: 'sacarLaLicenciaDeConducirCtrl'
      }
    }
  })

  .state('guALaRioja.renovarLaLicenciaDeConducir', {
    url: '/page102',
    views: {
      'side-menu21': {
        templateUrl: 'templates/renovarLaLicenciaDeConducir.html',
        controller: 'renovarLaLicenciaDeConducirCtrl'
      }
    }
  })

  .state('guALaRioja.conducirEnElExterior', {
    url: '/page103',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conducirEnElExterior.html',
        controller: 'conducirEnElExteriorCtrl'
      }
    }
  })

  .state('guALaRioja.cursoDeEducaciNVialPorInternet', {
    url: '/page104',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cursoDeEducaciNVialPorInternet.html',
        controller: 'cursoDeEducaciNVialPorInternetCtrl'
      }
    }
  })

  .state('guALaRioja.cDulas', {
    url: '/page105',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cDulas.html',
        controller: 'cDulasCtrl'
      }
    }
  })

  .state('guALaRioja.titularidadYDominio', {
    url: '/page106',
    views: {
      'side-menu21': {
        templateUrl: 'templates/titularidadYDominio.html',
        controller: 'titularidadYDominioCtrl'
      }
    }
  })

  .state('guALaRioja.compraVenta', {
    url: '/page107',
    views: {
      'side-menu21': {
        templateUrl: 'templates/compraVenta.html',
        controller: 'compraVentaCtrl'
      }
    }
  })

  .state('guALaRioja.discapacidad', {
    url: '/page108',
    views: {
      'side-menu21': {
        templateUrl: 'templates/discapacidad.html',
        controller: 'discapacidadCtrl'
      }
    }
  })

  .state('guALaRioja.cambiosEnElVehCulo', {
    url: '/page109',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambiosEnElVehCulo.html',
        controller: 'cambiosEnElVehCuloCtrl'
      }
    }
  })

  .state('guALaRioja.robo', {
    url: '/page110',
    views: {
      'side-menu21': {
        templateUrl: 'templates/robo.html',
        controller: 'roboCtrl'
      }
    }
  })

  .state('guALaRioja.seguros', {
    url: '/page111',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seguros.html',
        controller: 'segurosCtrl'
      }
    }
  })

  .state('guALaRioja.consultas', {
    url: '/page112',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consultas.html',
        controller: 'consultasCtrl'
      }
    }
  })

  .state('guALaRioja.consejosParaCircular', {
    url: '/page113',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consejosParaCircular.html',
        controller: 'consejosParaCircularCtrl'
      }
    }
  })

  .state('guALaRioja.pasosFronterizos', {
    url: '/page114',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pasosFronterizos.html',
        controller: 'pasosFronterizosCtrl'
      }
    }
  })

  .state('guALaRioja.antesDeViajar', {
    url: '/page115',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antesDeViajar.html',
        controller: 'antesDeViajarCtrl'
      }
    }
  })

  .state('guALaRioja.planificTuEmbarazo2', {
    url: '/page116',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planificTuEmbarazo2.html',
        controller: 'planificTuEmbarazo2Ctrl'
      }
    }
  })

  .state('guALaRioja.embarazoPartoYPuerperio', {
    url: '/page117',
    views: {
      'side-menu21': {
        templateUrl: 'templates/embarazoPartoYPuerperio.html',
        controller: 'embarazoPartoYPuerperioCtrl'
      }
    }
  })

  .state('guALaRioja.primerMesDeVidaDelBeb', {
    url: '/page118',
    views: {
      'side-menu21': {
        templateUrl: 'templates/primerMesDeVidaDelBeb.html',
        controller: 'primerMesDeVidaDelBebCtrl'
      }
    }
  })

  .state('guALaRioja.primerAODeVida', {
    url: '/page119',
    views: {
      'side-menu21': {
        templateUrl: 'templates/primerAODeVida.html',
        controller: 'primerAODeVidaCtrl'
      }
    }
  })

  .state('guALaRioja.niOsYNiAsDe1A5AOs', {
    url: '/page120',
    views: {
      'side-menu21': {
        templateUrl: 'templates/niOsYNiAsDe1A5AOs.html',
        controller: 'niOsYNiAsDe1A5AOsCtrl'
      }
    }
  })

  .state('guALaRioja.niOsYNiAsDe6A10AOs', {
    url: '/page121',
    views: {
      'side-menu21': {
        templateUrl: 'templates/niOsYNiAsDe6A10AOs.html',
        controller: 'niOsYNiAsDe6A10AOsCtrl'
      }
    }
  })

  .state('guALaRioja.calendarioNacionalDeVacunaciN', {
    url: '/page122',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioNacionalDeVacunaciN.html',
        controller: 'calendarioNacionalDeVacunaciNCtrl'
      }
    }
  })

  .state('guALaRioja.elCarnDeVacunaciN', {
    url: '/page123',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elCarnDeVacunaciN.html',
        controller: 'elCarnDeVacunaciNCtrl'
      }
    }
  })

  .state('guALaRioja.conocCMoTeProtegenEstasVacunas', {
    url: '/page124',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conocCMoTeProtegenEstasVacunas.html',
        controller: 'conocCMoTeProtegenEstasVacunasCtrl'
      }
    }
  })

  .state('guALaRioja.protegeteDelSolYElCalor', {
    url: '/page125',
    views: {
      'side-menu21': {
        templateUrl: 'templates/protegeteDelSolYElCalor.html',
        controller: 'protegeteDelSolYElCalorCtrl'
      }
    }
  })

  .state('guALaRioja.alimentaciNSegura', {
    url: '/page129',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alimentaciNSegura.html',
        controller: 'alimentaciNSeguraCtrl'
      }
    }
  })

  .state('guALaRioja.olasDeCalor', {
    url: '/page130',
    views: {
      'side-menu21': {
        templateUrl: 'templates/olasDeCalor.html',
        controller: 'olasDeCalorCtrl'
      }
    }
  })

  .state('guALaRioja.prevenciNDelSNdromeUrMicoHemolTico', {
    url: '/page131',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prevenciNDelSNdromeUrMicoHemolTico.html',
        controller: 'prevenciNDelSNdromeUrMicoHemolTicoCtrl'
      }
    }
  })

  .state('guALaRioja.hidrataciNAdecuadaYConsumoDeAguaSegura', {
    url: '/page132',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hidrataciNAdecuadaYConsumoDeAguaSegura.html',
        controller: 'hidrataciNAdecuadaYConsumoDeAguaSeguraCtrl'
      }
    }
  })

  .state('guALaRioja.prevenciNDeAccidentes', {
    url: '/page133',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prevenciNDeAccidentes.html',
        controller: 'prevenciNDeAccidentesCtrl'
      }
    }
  })

  .state('guALaRioja.saludDelViajero', {
    url: '/page134',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saludDelViajero.html',
        controller: 'saludDelViajeroCtrl'
      }
    }
  })

  .state('guALaRioja.vivamosLibresDeMosquitos', {
    url: '/page135',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vivamosLibresDeMosquitos.html',
        controller: 'vivamosLibresDeMosquitosCtrl'
      }
    }
  })

  .state('guALaRioja.fiebreAmarilla', {
    url: '/page136',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fiebreAmarilla.html',
        controller: 'fiebreAmarillaCtrl'
      }
    }
  })

  .state('guALaRioja.situacionesDeEmergencia', {
    url: '/page137',
    views: {
      'side-menu21': {
        templateUrl: 'templates/situacionesDeEmergencia.html',
        controller: 'situacionesDeEmergenciaCtrl'
      }
    }
  })

  .state('guALaRioja.botiquNDePrimerosAuxilios', {
    url: '/page138',
    views: {
      'side-menu21': {
        templateUrl: 'templates/botiquNDePrimerosAuxilios.html',
        controller: 'botiquNDePrimerosAuxiliosCtrl'
      }
    }
  })

  .state('guALaRioja.preguntasFrecuentes', {
    url: '/page139',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preguntasFrecuentes.html',
        controller: 'preguntasFrecuentesCtrl'
      }
    }
  })

  .state('guALaRioja.anticonceptivos', {
    url: '/page140',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anticonceptivos.html',
        controller: 'anticonceptivosCtrl'
      }
    }
  })

  .state('guALaRioja.sexoSeguro', {
    url: '/page141',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sexoSeguro.html',
        controller: 'sexoSeguroCtrl'
      }
    }
  })

  .state('guALaRioja.embarazoResponsable', {
    url: '/page142',
    views: {
      'side-menu21': {
        templateUrl: 'templates/embarazoResponsable.html',
        controller: 'embarazoResponsableCtrl'
      }
    }
  })

  .state('guALaRioja.consejosParaUnViajeSaludable', {
    url: '/page143',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consejosParaUnViajeSaludable.html',
        controller: 'consejosParaUnViajeSaludableCtrl'
      }
    }
  })

  .state('guALaRioja.botiquNDeViaje', {
    url: '/page144',
    views: {
      'side-menu21': {
        templateUrl: 'templates/botiquNDeViaje.html',
        controller: 'botiquNDeViajeCtrl'
      }
    }
  })

  .state('guALaRioja.antesDeViajar2', {
    url: '/page145',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antesDeViajar2.html',
        controller: 'antesDeViajar2Ctrl'
      }
    }
  })

  .state('guALaRioja.cuidadosDuranteElViaje', {
    url: '/page146',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cuidadosDuranteElViaje.html',
        controller: 'cuidadosDuranteElViajeCtrl'
      }
    }
  })

  .state('guALaRioja.casosEspeciales', {
    url: '/page147',
    views: {
      'side-menu21': {
        templateUrl: 'templates/casosEspeciales.html',
        controller: 'casosEspecialesCtrl'
      }
    }
  })

  .state('guALaRioja.delegacionesMunicipales', {
    url: '/page148',
    views: {
      'side-menu21': {
        templateUrl: 'templates/delegacionesMunicipales.html',
        controller: 'delegacionesMunicipalesCtrl'
      }
    }
  })

  .state('guALaRioja.agenciaMunicipalDeCultura', {
    url: '/page153',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agenciaMunicipalDeCultura.html',
        controller: 'agenciaMunicipalDeCulturaCtrl'
      }
    }
  })

  .state('guALaRioja.guADeTrMites', {
    url: '/page149',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guADeTrMites.html',
        controller: 'guADeTrMitesCtrl'
      }
    }
  })

  .state('guALaRioja.recolecciNDeResiduos', {
    url: '/page150',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recolecciNDeResiduos.html',
        controller: 'recolecciNDeResiduosCtrl'
      }
    }
  })

  .state('guALaRioja.telFonosTiles2', {
    url: '/page151',
    views: {
      'side-menu21': {
        templateUrl: 'templates/telFonosTiles2.html',
        controller: 'telFonosTiles2Ctrl'
      }
    }
  })

  .state('guALaRioja.linksTiles', {
    url: '/page152',
    views: {
      'side-menu21': {
        templateUrl: 'templates/linksTiles.html',
        controller: 'linksTilesCtrl'
      }
    }
  })

  .state('guALaRioja.reclamosYSugerencias', {
    url: '/page154',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reclamosYSugerencias.html',
        controller: 'reclamosYSugerenciasCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});