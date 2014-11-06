<?php
	class ClsPersona extends ClsConexion {
		# CONSTRUCT
		public function __construct($cnx  = null)
		{
			$this->conn = $cnx;
		}
		# Método Insertar
		public function set_persona($bean_persona)
		{
			$name = $bean_persona->getName();
			$dni  = $bean_persona->getDni();

			$this->query = "CALL usp_set_persona('$name','$dni')";
			$this->execute_query();
			$data = $this->rows ;
			return $data;
		}
		# Método Actualizar
		public function upd_persona($bean_persona)
		{
			$id   = $bean_persona->getId();
			$name = $bean_persona->getName();
			$dni  = $bean_persona->getDni();

			$this->query = "CALL usp_upd_persona('$id','$name','$dni')";
			$this->execute_query();
			$data = $this->rows ;
			return $data;
		}
		# Método Buscar por ID
		public function get_persona_by_id($bean_persona)
		{
			$id = $bean_persona->getId();

			$this->query = "CALL usp_get_persona_by_id('$id')";
			$this->execute_query();
			$data = $this->rows ;
			return $data;
		}
		# Método get Seleccionar todos
		public function get_persona()
		{
			$this->query = "CALL usp_get_persona()";
			$this->execute_query();
			$data = $this->rows ;
			return $data;
		}
		# Método Eliminar por ID
		public function del_persona_by_id($bean_persona)
		{
			$id = $bean_persona->getId();

			$this->query = "CALL usp_del_persona_by_id('$id')";
			$this->execute_query();
			$data = $this->rows ;
			return $data;
		}
	}