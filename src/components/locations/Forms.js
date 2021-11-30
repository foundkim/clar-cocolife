import { TextField, MenuItem } from "@mui/material";

export const Infos = (props) => {
  const { handleChange, values, state } = props;
  return (
    <>
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Identifiant"
        name="id"
        value={values.id}
        onChange={handleChange}
        placeholder="CIXXX"
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Pays"
        name="country"
        value={values.country}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Région"
        name="region"
        value={values.region}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="District"
        name="district"
        value={values.district}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Communauté"
        name="community_name"
        value={values.community_name}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined"
        label="Lattitude"
        name="lattitude"
        value={values.lattitude}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined"
        label="Longitude"
        name="longitude"
        value={values.longitude}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Sous-préfecture"
        name="sub_prefecture"
        value={values.sub_prefecture}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Terroir"
        name="terroir"
        value={values.terroir}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="International NGO NGO"
        name="ngo"
        value={values.ngo}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Partenaires Implentés"
        name="impl_partner"
        value={values.impl_partner}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Cocoa suppliers"
        name="cocoa_suppliers"
        value={values.cocoa_suppliers}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        required
        id="outlined-required"
        label="Coopératives"
        name="comperative"
        value={values.comperative}
        onChange={handleChange}
      />
    </>
  );
};

export const Project = (props) => {
  const { handleChange, values , state} = props;
  return (
    <>
      <TextField
        disabled={state}
        id="outlined"
        label="Nombre de ménages"
        type="number"
        name="households"
        value={values.households}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Population Homme"
        type="number"
        name="men"
        value={values.men}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Population Femme"
        type="number"
        name="women"
        value={values.women}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Population Totale"
        type="number"
        name="population"
        value={values.population}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        label="CPE en 2019"
        select
        name="cpe_2019"
        value={values.cpe_2019}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="project_clmrs_2020_bc"
        select
        name="project_clmrs_2020_bc"
        value={values.project_clmrs_2020_bc}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="project_clmrs_2020_core"
        select
        name="project_clmrs_2020_core"
        value={values.project_clmrs_2020_core}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CPE en 2020"
        select
        name="cpe_2020"
        value={values.cpe_2020}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CPE total en 2020"
        select
        name="cpe_total_2020"
        value={values.cpe_total_2020}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CPE replicat en 2020"
        select
        name="cpe_replicat_2020"
        value={values.cpe_replicat_2020}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CPE cible en 2020"
        select
        name="cpe_target_2020"
        value={values.cpe_target_2020}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CPE cible en 2021"
        select
        name="cpe_target_2021"
        value={values.cpe_target_2021}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CPE cible attendu  en 2021"
        select
        name="cpe_target_expected_2021"
        value={values.cpe_target_expected_2021}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CLMRS cible en 2021"
        select
        name="clmrs_target_2021"
        value={values.clmrs_target_2021}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CLMRS total en 2021"
        select
        name="clmrs_total_2021"
        value={values.clmrs_total_2021}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
    </>
  );
};

export const Population = (props) => {
  const { handleChange, values, state } = props;
  return (
    <>
      <TextField
        disabled={state}
        id="outlined"
        label="NNombre de cas observés"
        type="number"
        name="observed_cases"
        value={values.observed_cases}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Remédiation en 2021"
        type="number"
        name="remediation_2021"
        value={values.remediation_2021}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        label="PAC élaborés"
        select
        name="elaborated_pac"
        value={values.elaborated_pac}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        id="outlined"
        label="Année d'élaboration PAC"
        type="number"
        name="pac_elaboration_year"
        value={values.pac_elaboration_year}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        label="PAC actifs"
        select
        name="actived_pac"
        value={values.actived_pac}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CODEC/CDCOM créés"
        select
        name="created_codec_cdcom"
        value={values.created_codec_cdcom}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="Status des localités"
        select
        name="location_status"
        value={values.location_status}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"An"}>Ancienne</MenuItem>
        <MenuItem value={"Nvelle"}>Nouvelle</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        label="CODEC operationnel"
        select
        name="actived_codec_cdcom"
        value={values.actived_codec_cdcom}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Null</em>
        </MenuItem>
        <MenuItem value={"Y"}>Oui</MenuItem>
        <MenuItem value={"N"}>Non</MenuItem>
      </TextField>
      <TextField
        disabled={state}
        id="outlined"
        label="Projets PAC démarrés"
        type="number"
        name="started_pac_projects"
        value={values.started_pac_projects}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Projets PAC réalisés"
        type="number"
        name="done_pac_projects"
        value={values.done_pac_projects}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="1ère année d'investissement"
        type="number"
        name="first_investment_year"
        value={values.first_investment_year}
        onChange={handleChange}
      />
       <TextField
         disabled={state}
        id="outlined"
        label="Monatnt d'investissement"
        type="number"
        name="investment_amount"
        value={values.investment_amount}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="AVEC créés"
        type="number"
        name="created_avec"
        value={values.created_avec}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Membres participant au Communauté AVEC"
        type="number"
        name="members_of_participant_community_avec"
        value={values.members_of_participant_community_avec}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="Nombre AVEC formalisés"
        type="number"
        name="formalized_avec"
        value={values.formalized_avec}
        onChange={handleChange}
      />
      <TextField
        disabled={state}
        id="outlined"
        label="AVEC en lien avec IMF"
        type="number"
        name="avec_imf"
        value={values.avec_imf}
        onChange={handleChange}
      />
    </>
  );
};


export const Others = (props) => {
    const { handleChange, values, state } = props;
    return (
      <>
        <TextField
          disabled={state}
          id="outlined"
          label="Nombre AGR créés"
          type="number"
          name="created_agr"
          value={values.created_agr}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Personnes ayany des AGR "
          type="number"
          name="people_with_agr"
          value={values.people_with_agr}
          onChange={handleChange}
        />
       
        <TextField
          disabled={state}
          id="outlined"
          label="Forêts restaurées"
          type="number"
          name="restored_forest"
          value={values.restored_forest}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Superficie des forêts restaurées"
          type="number"
          name="total_area_of_restored_forest"
          value={values.total_area_of_restored_forest}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Nombre d'espèces introduites"
          type="number"
          name="introduced_species"
          value={values.introduced_species}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Forêts conservées"
          type="number"
          name="stored_forest"
          value={values.stored_forest}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Superficie des forêts conservées"
          type="number"
          name="total_area_of_stored_forest"
          value={values.total_area_of_stored_forest}
          onChange={handleChange}
        />
         <TextField
           disabled={state}
          id="outlined"
          label="Foyers améliorés Construits avant 2021"
          type="number"
          name="improved_stoves_built_before_2021"
          value={values.improved_stoves_built_before_2021}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Foyers améliorés Construits pour projet pilote"
          type="number"
          name="improved_stoves_built_in_pilot_project"
          value={values.improved_stoves_built_in_pilot_project}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Foyers améliorés Construits hors projet"
          type="number"
          name="improved_stoves_built_outside_project"
          value={values.improved_stoves_built_outside_project}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Producteurs pratiquant l'AF"
          type="number"
          name="af_producers"
          value={values.af_producers}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
          id="outlined"
          label="Nombre d'hectares des parcelles AF"
          type="number"
          name="af_plot_hectare"
          value={values.af_plot_hectare}
          onChange={handleChange}
        />
        <TextField
          disabled={state}
        required
        label="Statut"
        select
        name="status"
        value={values.status}
        onChange={handleChange}
      >
        <MenuItem value={0}>Retenue</MenuItem>
        <MenuItem value={1}>Retirée</MenuItem>
      </TextField>

      </>
    );
  };
